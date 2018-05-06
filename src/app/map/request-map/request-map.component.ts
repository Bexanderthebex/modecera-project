import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-request-map",
  templateUrl: "./request-map.component.html",
  styleUrls: ["./request-map.component.css"]
})
export class RequestMapComponent implements OnInit {
  private requestMap: FormGroup;
  private requestType: String;
  tooltipPosition: String = 'above';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RequestMapComponent>,
  ) {
    this.requestMap = fb.group({
      'email': '',
      'request': '',
      'reason': ''
    });

    this.requestType = 'MAP';
  }

  ngOnInit() {}

  requestAddMap(value: any): void {
    value.requestType = this.requestType;
    this.dialogRef.close(value);
  }
}
