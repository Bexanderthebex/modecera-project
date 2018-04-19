import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layer-list',
  templateUrl: './layerlist.component.html',
  styleUrls: ['./layerlist.component.css']
})
export class LayerlistComponent implements OnInit {
  private dummyData: any;
  position = "above"

  constructor() { 
    this.dummyData = [
      { id: "1", name: "Aborlan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" }, 
      { id: "2", name: "Balogo", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" },
      { id: "3", name: "Carranglan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"},
      { id: "4", name: "Aborlan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" },
      { id: "1", name: "Aborlan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" }, 
      { id: "2", name: "Balogo", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" },
      { id: "3", name: "Carranglan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"},
      { id: "4", name: "Aborlan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" },
      { id: "1", name: "Aborlan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" }, 
      { id: "2", name: "Balogo", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" },
      { id: "3", name: "Carranglan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"},
      { id: "4", name: "Aborlan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" },
    ];
  }

  ngOnInit() {
  }

}
