import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {

  constructor(private http: HttpClient) { 
  }

  /* Rename to getTileLayers */
  getTileLayer(url: string): any {
    return this.http.get(url);
  }

  downloadLayer(link: string): Observable<Blob> {
    return this.http.get(link, {responseType: 'blob'});
  }
}
