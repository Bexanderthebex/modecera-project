import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LayerService {
  constructor(private http: HttpClient) {}

  downloadLayer(link: string): Observable<Blob> {
    return this.http.get(link, { responseType: "blob" });
  }
}
