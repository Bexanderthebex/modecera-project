import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {
  constructor(private http: HttpClient) {}

  /* Rename to getTileLayers */
  getTileLayer(url: string): any {
    return this.http.get(url);
  }

  getMaps(): any {
    return this.http.get("http://localhost:3000/api/maps");
  }

  deleteLayer(toDelete: any) {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: toDelete
    };
    return this.http.delete("http://localhost:3000/api/maps", options);
  }
}
