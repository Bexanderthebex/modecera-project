import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-add-map",
  templateUrl: "./add-map.component.html",
  styleUrls: ["./add-map.component.css"]
})
export class AddMapComponent implements OnInit { 
  private addMap: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addMap = fb.group({
      'map_name': '',
      'access_token': '',
      'attribution': '',
      'link': ''
    })
  }

  ngOnInit() {}

  requestAddMap(value: any): void {
    this.dialogRef.close(value);
  }
}
