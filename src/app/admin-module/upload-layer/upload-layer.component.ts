import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-upload-layer',
  templateUrl: './upload-layer.component.html',
  styleUrls: ['./upload-layer.component.css']
})
export class UploadLayerComponent implements OnInit {
  private fileSelected: File = null;
  private uploading: Boolean;
  private selectedLayer: string;
  private tooltipPosition: String = 'above';

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<UploadLayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) 
  { 
    this.uploading = false;
    this.selectedLayer = 'Watersheds';
  }

  ngOnInit() {
  }

  private onFileSelected(event) {
    this.fileSelected = <File>event.target.files[0];
  }
  
  private onFileUpload() {
    const fd = new FormData();
    fd.append('sample', this.fileSelected, this.fileSelected.name);
    fd.append('label_group', this.selectedLayer);
    this.uploading = true;
    /* make a service method for this if possible */
    this.http.post(
        'http://localhost:3000/api/layers/upload', 
        fd
      )
      .subscribe(res => {
        this.dialogRef.close({message: "successfully added map", code: 204});
      },
      error => {
        this.dialogRef.close(error);
      } 
    )
  }
}
