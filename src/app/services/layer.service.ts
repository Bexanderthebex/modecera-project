import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class LayerService {
  constructor(private http: HttpClient) {}

  downloadLayer(link: string): Observable<Blob> {
    return this.http.get(link, { responseType: "blob" })
                    .catch(this.errorHandler);
  }

  deleteLayer(toDelete: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: toDelete
    }
    return this.http.delete('http://localhost:3000/api/layers', options)
                    .catch(this.errorHandler);
  } 

  getAllLayers() {
    return this.http
      .get("http://localhost:3000/api/layers")
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
