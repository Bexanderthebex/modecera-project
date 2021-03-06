import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  requestMap(data: any) {
      return this.http.post("http://localhost:3000/api/requests", data)
               .catch(this.errorHandler);
  }

  approveRequest(requestBody: any) {
    return this.http.put("http://localhost:3000/api/requests/approve", requestBody)
               .catch(this.errorHandler);
  }

  getAllRequest() {
    return this.http.get("http://localhost:3000/api/requests")
              .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}