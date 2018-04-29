import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class MapService {
  constructor(private http: HttpClient) {}

  /* Rename to getTileLayers */
  getTileLayer(url: string): Observable<Object> {
    return this.http.get(url);
  }

  getMaps(): Observable<Object> {
    return this.http
      .get("http://localhost:3000/api/maps")
      .catch(this.errorHandler);
  }

  addMap(map: any): Observable<Object> {
    return this.http
      .post("http://localhost:3000/api/maps", map)
      .catch(this.errorHandler);
  }

  deleteMap(toDelete: any) {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: toDelete
    };
    return this.http
      .delete("http://localhost:3000/api/maps", options)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
