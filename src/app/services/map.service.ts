import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {
  constructor(private http: HttpClient) {}

  /* Rename to getTileLayers */
  getTileLayer(url: string): Observable<Object> {
    return this.http.get(url);
  }

  getMaps(): Observable<Object> {
    return this.http.get("http://localhost:3000/api/maps");
  }

  addMap(map: any): Observable<Object> {
    return this.http.post("http://localhost:3000/api/maps", map);
  }

  deleteMap(toDelete: any) {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: toDelete
    };
    return this.http.delete("http://localhost:3000/api/maps", options);
  }
}
