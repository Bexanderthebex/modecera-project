import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LayerService } from "../../services/layer.service";
import { saveAs as SaveAs} from "file-saver";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "app-layer-list",
  templateUrl: "./layerlist.component.html",
  styleUrls: ["./layerlist.component.css"]
})
export class LayerlistComponent implements OnInit, AfterViewInit {
  private layersLoaded: Boolean;
  private layersData: any = null;
  private columnDef: any = [];
  private dataSource: any;
  selection = new SelectionModel<Element>(true, []);
  position = "above";

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private layerService: LayerService) {

    this.columnDef = ["select", "name", "type", "link"];
  }

  ngOnInit() {
    this.layerService.getAllLayers().subscribe( (data) => {
      console.log(data);
      this.layersData = data;
      this.dataSource = new MatTableDataSource<Element>(this.layersData);
      this.layersLoaded = true;
    }, error => {
      console.log(error);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteHandler(): void {
    this.layerService.deleteLayer(this.selection.selected.map(layer => {
        return { _id: layer["_id"], name: layer["name"], bucket: layer["bucket"] };
      })).subscribe( data => {
            this.layerService.getAllLayers().subscribe(data => {
                console.log(data);
                this.layersData = data;
                this.dataSource = new MatTableDataSource<Element>(this.layersData);
                // this.layersLoaded = Promise.resolve(true);
              }, error => {
                console.log(error);
              });
      }, error => {
        console.log(error)
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
