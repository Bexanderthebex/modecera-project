import { Component, OnInit, ViewChild } from '@angular/core';
import { LayerService } from "../../services/layer.service";
import { saveAs as SaveAs} from "file-saver";
import { 
  MatPaginator, 
  MatTableDataSource, 
  MatDialog, 
  MatDialogRef,
  MatSnackBar, 
  MAT_DIALOG_DATA 
} from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { UploadLayerComponent } from "../upload-layer/upload-layer.component";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-layer-list",
  templateUrl: "./layerlist.component.html",
  styleUrls: ["./layerlist.component.css"]
})
export class LayerlistComponent implements OnInit {
  private layersLoaded: Boolean;
  private layersData: any;
  private columnDef: any;
  private dataSource: any;
  private selection = new SelectionModel<Element>(true, []);

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private layerService: LayerService, 
    public dialog: MatDialog, 
    public snackbar: MatSnackBar
  ) {
    this.layersData = null;
    this.columnDef = ["select", "name", "link"];
    this.layersLoaded = false;
  }

  ngOnInit() {
    this.layerService.getAllLayers().subscribe( (data) => {
      this.layersData = data;
      this.dataSource = new MatTableDataSource<Element>(this.layersData);
      this.dataSource.paginator = this.paginator;
      this.layersLoaded = true;
    }, error => {
      console.log(error);
    })
  }

  openUploadLayer(): void {
    let dialogRef = this.dialog.open(UploadLayerComponent, {
      height: '400px',
      width: '600px'
    });

   dialogRef.afterClosed()
    .subscribe(res => {
      console.log(res);
      if(res.error && res != null) {
        this.snackbar.open(res.error.message);
      } else {
        this.layerService.getAllLayers().subscribe(data => {
            if(data.error) {
              this.snackbar.open(data.error.message);
            } else {
              this.layersData = data;
              this.dataSource = new MatTableDataSource<Element>(this.layersData);
              this.dataSource.paginator = this.paginator;
              this.selection.clear();
              this.snackbar.open('successfully added map');
            }
          });
      }
    });
  }

  deleteHandler(): void {
    this.layerService.deleteLayer(this.selection.selected.map(layer => {
        return { _id: layer["_id"], name: layer["name"]};
      })).subscribe( data => {
            this.layerService.getAllLayers().subscribe(data => {
                this.layersData = data;
                this.dataSource = new MatTableDataSource<Element>(this.layersData);
                this.dataSource.paginator = this.paginator;
                this.selection.clear()
              }, error => {
                this.snackbar.open(error);
              });
      }, error => {
        this.snackbar.open(error);
      });
  }

  /* dirty implementation */
  downloadHandler(): void {
    this.selection.selected.forEach( (layer) => {
      this.layerService.downloadLayer(layer["link"]).subscribe(blob => {
        SaveAs(blob, layer["name"]);
      })
    });
  }

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
