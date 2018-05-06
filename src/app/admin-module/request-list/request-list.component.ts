import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
import { RequestService } from "../../services/request.service";
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MatSnackBar
} from "@angular/material";
import { AddMapComponent } from "../add-map/add-map.component";
import { UploadLayerComponent } from "../upload-layer/upload-layer.component";

@Component({
  selector: "app-request-list",
  templateUrl: "./request-list.component.html",
  styleUrls: ["./request-list.component.css"]
})
export class RequestListComponent implements OnInit {
  private requestsLoaded: Boolean;
  private requestsData: any;
  private columnDef: any;
  private dataSource: any;
  @Output() requestEmitter: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("requestPaginator") requestPaginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    public snackbar: MatSnackBar,
    private requestService: RequestService
  ) {
    this.requestsLoaded = false;
    this.requestsData = null;
    this.columnDef = [
      "requester",
      "request",
      "request_type",
      "request_approved",
      "approve_request"
    ];
  }

  ngOnInit() {
    this.requestService.getAllRequest().subscribe(
      data => {
        this.requestsData = data;
        this.dataSource = new MatTableDataSource<Element>(this.requestsData);
        this.dataSource.paginator = this.requestPaginator;
        this.requestsLoaded = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  approveRequest(rowData: any) {
    if(rowData.request_type == "MAP") {
      let dialogRef = this.dialog.open(AddMapComponent, {
        height: '420px',
        width: '450px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          let approveRequestBody = {
            _id: rowData._id,
            email: rowData.requester_email_address
          }
          this.requestEmitter.emit(result);
          this.requestService
            .approveRequest(approveRequestBody)
            .subscribe(
              result => {
                this.dataSource = new MatTableDataSource<Element>(
                  this.requestsData.map(request => {
                    if (request._id == result._id) {
                      return result;
                    }
                    return request;
                  })
                );
                this.snackbar.open(
                  "Request Successfully Approved",
                  null,
                  {
                    duration: 2000
                  }
                );
              },
              error => {
                this.snackbar.open("an error occured", null, {
                  duration: 2000
                });
              }
            );
        }
      })
    } else if(rowData.request_type == "LAYER") {
      this.requestEmitter.emit(rowData);
      // insert approve request service here
      let approveRequestBody = {
        _id: rowData._id,
        email: rowData.requester_email_address
      }
      this.requestService
        .approveRequest(approveRequestBody)
        .subscribe(
          result => {
            this.dataSource = new MatTableDataSource<Element>(
              this.requestsData.map(request => {
                if (request._id == result._id) {
                  return result;
                }
                return request;
              })
            );
            this.snackbar.open(
              "Request Successfully Approved",
              null,
              {
                duration: 2000
              }
            );
          },
          error => {
            this.snackbar.open("an error occured", null, {
              duration: 2000
            });
          }
        );
    }
  }

  /* Paginator utils */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
