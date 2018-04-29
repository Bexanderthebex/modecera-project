import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-upload-layer',
  templateUrl: './upload-layer.component.html',
  styleUrls: ['./upload-layer.component.css']
})
export class UploadLayerComponent implements OnInit {
  fileSelected: File = null;
  uploading: Boolean;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<UploadLayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) 
  { 
    this.uploading = false;
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.fileSelected = <File>event.target.files[0];
  }
  
  onFileUpload() {
    const fd = new FormData();
    fd.append('sample', this.fileSelected, this.fileSelected.name);
    this.uploading = true;
    /* make a service method for this if possible */
    this.http.post('http://localhost:3000/api/layers/upload', fd)
      .subscribe(res => {
        this.dialogRef.close({message: "successfully added map", code: 204});
      },
      error => {
        console.log("pumasok sa error");
        console.log(error);
        this.dialogRef.close(error);
      } 
    )
  }
}
