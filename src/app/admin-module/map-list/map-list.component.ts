import { Component, OnInit, ViewChild, OnChanges, Input } from "@angular/core";
import { MapService } from "../../services/map.service";
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MatSnackBar
} from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { AddMapComponent } from "../add-map/add-map.component";

@Component({
  selector: "app-map-list",
  templateUrl: "./map-list.component.html",
  styleUrls: ["./map-list.component.css"]
})
export class MapListComponent implements OnInit, OnChanges {
  private mapsLoaded: Boolean;
  private mapsData: any;
  private columnDef: any;
  private dataSource: any;
  private selection = new SelectionModel<Element>(true, []);

  @Input() mapRequest: any;
  @ViewChild('mapPaginator') mapPaginator: MatPaginator;

  constructor(
    private mapService: MapService, 
    public dialog: MatDialog, 
    public snackbar: MatSnackBar
    ) 
  {
    this.mapRequest = null;
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

  ngOnChanges() {
    if(this.mapRequest != null) {
     this.addMapHandler(this.mapRequest);
    }
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

  public addMapHandler(value: any): void {
    this.mapService
      .addMap(value)
      .subscribe(result => {
          this.snackbar.open("Successfully added Map", null, {
            duration: 2000
          });
          this.mapService.getMaps().subscribe(data => {
              this.mapsData = data;
              this.dataSource = new MatTableDataSource<Element>(this.mapsData);
              this.dataSource.paginator = this.mapPaginator;
              this.selection.clear();
            }, error => {
              this.snackbar.open(
                "An error occured in fetching list of maps",
                null,
                {
                  duration: 2000
                }
              );
              console.log(error);
            });
        }, error => {
          this.snackbar.open("Map was not successfully added", null, {
            duration: 2000
          });
          console.log(error);
        })
  }

  deleteHandler(): void {
    this.mapService
      .deleteMap(this.selection.selected.map(map => {
          return { _id: map["_id"] };
        }))
      .subscribe(data => {
          this.mapService.getMaps().subscribe(data => {
              this.mapsData = data;
              this.dataSource = new MatTableDataSource<Element>(this.mapsData);
              this.dataSource.paginator = this.mapPaginator;
              this.selection.clear();
            }, error => {

              console.log(error);
            });
          this.snackbar.open("Successfully deleted Map/s", null, {
            duration: 2000
          }); 
        }, error => {
          this.snackbar.open("an error occured", null, {
            duration: 2000
          });
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
