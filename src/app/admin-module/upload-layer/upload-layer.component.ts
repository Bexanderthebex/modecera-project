import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-layer',
  templateUrl: './upload-layer.component.html',
  styleUrls: ['./upload-layer.component.css']
})
export class UploadLayerComponent implements OnInit {
  fileSelected: File = null;

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.fileSelected = <File>event.target.files[0];
  }
  
  onFileUpload() {
    
  }
}
