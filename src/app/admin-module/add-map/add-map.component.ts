import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-add-map",
  templateUrl: "./add-map.component.html",
  styleUrls: ["./add-map.component.css"]
})
export class AddMapComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
