import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LayerService } from "../../services/layer.service";
import { saveAs as SaveAs} from "file-saver";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-layer-list",
  templateUrl: "./layerlist.component.html",
  styleUrls: ["./layerlist.component.css"]
})
export class LayerlistComponent implements OnInit, AfterViewInit {
  private dummyData: any;
  private columnDef: any = [];
  private dataSource: any;
  selection = new SelectionModel<Element>(true, []);
  position = "above";

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private layerService: LayerService) {
    this.dummyData = [
      {
        id: "1",
        name: "Aborlan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media"
      },
      {
        id: "2",
        name: "Balogo.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media"
      },
      {
        id: "3",
        name: "Carranglan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"
      },
      {
        id: "4",
        name: "Aborlan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media"
      },
      {
        id: "1",
        name: "Aborlan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media"
      },
      {
        id: "2",
        name: "Balogo.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media"
      },
      {
        id: "3",
        name: "Carranglan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"
      },
      {
        id: "4",
        name: "Aborlan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media"
      },
      {
        id: "1",
        name: "Aborlan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media"
      },
      {
        id: "2",
        name: "Balogo.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media"
      },
      {
        id: "3",
        name: "Carranglan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"
      },
      {
        id: "4",
        name: "Aborlan.geojson",
        type: "L.GeoJSON",
        link:
          "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media"
      }
    ];

    this.columnDef = ["select", "name", "type", "link"];
    this.dataSource = new MatTableDataSource<Element>(this.dummyData);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
