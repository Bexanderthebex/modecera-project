import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-upload-layer',
  templateUrl: './upload-layer.component.html',
  styleUrls: ['./upload-layer.component.css']
})
export class UploadLayerComponent implements OnInit {
  fileSelected: File = null;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<UploadLayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) 
  { 
    
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.fileSelected = <File>event.target.files[0];
  }
  
  onFileUpload() {
    const fd = new FormData();
    fd.append('sample', this.fileSelected, this.fileSelected.name);
    /* make a service method for this if possible */
    this.http.post('http://localhost:3000/api/layers/upload', fd)
      .subscribe(res => {
        console.log(res);
      })
  }
}
