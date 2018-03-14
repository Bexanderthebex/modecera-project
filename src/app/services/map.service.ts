import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService {

  constructor(private http: HttpClient) { 

  }

  getTileLayer(url: string): any {
    return this.http.get(url);
  }
}
