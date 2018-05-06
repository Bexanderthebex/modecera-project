import { Component, OnInit, ViewChild } from "@angular/core";
import { RequestService } from "../../services/request.service";
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MatSnackBar
} from "@angular/material";

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
        console.log(data);
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

  /* Paginator utils */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
