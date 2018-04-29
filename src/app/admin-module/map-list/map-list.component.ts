import { Component, OnInit, ViewChild } from "@angular/core";
import { MapService } from "../../services/map.service";
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { AddMapComponent } from "../add-map/add-map.component";

@Component({
  selector: "app-map-list",
  templateUrl: "./map-list.component.html",
  styleUrls: ["./map-list.component.css"]
})
export class MapListComponent implements OnInit {
  private mapsLoaded: Boolean;
  private mapsData: any;
  private columnDef: any;
  private dataSource: any;
  private selection = new SelectionModel<Element>(true, []);

  @ViewChild('mapPaginator') mapPaginator: MatPaginator;

  constructor(
    private mapService: MapService, 
    public dialog: MatDialog, 
    public snackbar: MatSnackBar
    ) 
  {
    this.mapsLoaded = false;
    this.mapsData = null;
    this.columnDef = ["select", "map_name", "access_token", "attribution", "link"];
  }

  ngOnInit() {
    /* TODO:  fetch data from the API endpoint here and set the datasource*/
    this.mapService.getMaps().subscribe( (data) => {
      this.mapsData = data;
      this.dataSource = new MatTableDataSource<Element>(this.mapsData);
      this.dataSource.paginator = this.mapPaginator;
      this.mapsLoaded = true;
      
    }, err => {
      console.log(err);
    })

  }

  openAddMap(): void {
    let dialogRef = this.dialog.open(AddMapComponent, {
      height: '420px',
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addMapHandler(result);
    })
  }

  addMapHandler(value: any): void {
    this.mapService
      .addMap(value)
      .subscribe(result => {
          this.snackbar.open('Successfully added Map');
          this.mapService.getMaps().subscribe(data => {
              this.mapsData = data;
              this.dataSource = new MatTableDataSource<Element>(this.mapsData);
              this.dataSource.paginator = this.mapPaginator;
              this.selection.clear();
            }, error => {
              this.snackbar.open('An error occured in fetching list of maps');
              console.log(error);
            });
        }, error => {
          this.snackbar.open('Map was not successfully added');
          console.log(error);
        })
  }

  deleteHandler(): void {
    this.mapService
      .deleteMap(this.selection.selected.map(map => {
          return { _id: map["_id"] };
        }))
      .subscribe(data => {
          this.snackbar.open("Successfully deleted Map/s");
          this.mapService.getMaps().subscribe(data => {
              this.mapsData = data;
              this.dataSource = new MatTableDataSource<Element>(this.mapsData);
              this.dataSource.paginator = this.mapPaginator;
              this.selection.clear();
            }, error => {

              console.log(error);
            });
        }, error => {
          this.snackbar.open('an error occured')
          console.log(error);
        });
  }

  /* Paginator utils */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
}
