import { Component, OnInit } from '@angular/core';
import { MapService } from "../../services/map.service";
import { saveAs as SaveAs} from "file-saver";

@Component({
  selector: 'app-layer-list',
  templateUrl: './layerlist.component.html',
  styleUrls: ['./layerlist.component.css']
})
export class LayerlistComponent implements OnInit {
  private dummyData: any;
  position = "above"

  constructor(private mapService: MapService) { 
    this.dummyData = [
      { id: "1", name: "Aborlan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" }, 
      { id: "2", name: "Balogo.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" },
      { id: "3", name: "Carranglan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"},
      { id: "4", name: "Aborlan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" },
      { id: "1", name: "Aborlan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" }, 
      { id: "2", name: "Balogo.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" },
      { id: "3", name: "Carranglan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"},
      { id: "4", name: "Aborlan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" },
      { id: "1", name: "Aborlan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" }, 
      { id: "2", name: "Balogo.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" },
      { id: "3", name: "Carranglan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media"},
      { id: "4", name: "Aborlan.geojson", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" },
    ];
  }

  ngOnInit() {
  }

  downloadHandler(link: string, name: string): void {
    this.mapService.downloadLayer(link).subscribe(blob => {
      console.log(blob);
      SaveAs(blob, name);
    });
  }
}
