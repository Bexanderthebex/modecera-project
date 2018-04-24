import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LayerService {
  constructor(private http: HttpClient) {}

  downloadLayer(link: string): Observable<Blob> {
    return this.http.get(link, { responseType: "blob" });
  }

  deleteLayer(toDelete: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: toDelete
    }
    return this.http.delete('http://localhost:3000/api/layers', options);
  } 

  getAllLayers() {
    return this.http.get('http://localhost:3000/api/layers');
  }
}
