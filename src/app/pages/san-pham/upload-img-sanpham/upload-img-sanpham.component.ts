import { Component, OnInit , EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Observable, concat } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';

const URL = '/api/';

@Component({
  selector: 'ngx-upload-img-sanpham',
  templateUrl: './upload-img-sanpham.component.html',
  styleUrls: ['./upload-img-sanpham.component.scss']
})
export class UploadImgSanphamComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  // public uploader: FileUploader = new FileUploader({
  //   url: URL,
  //   disableMultipart : false,
  //   autoUpload: true,
  //   method: 'post',
  //   itemAlias: 'attachment',
  //   allowedFileType: ['image', 'pdf']
  //   });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(this.uploader.queue);

  }




  
  title = 'fileupload';  
  remark = '';  
  constructor(private httpService: HttpClient) { }  
  myFiles: string[] = [];  
    
  sMsg: string = '';  
  StudentIdUpdate: string;  
  ngOnInit() {}  
    
  getFileDetails(e) {  
    //console.log (e.target.files);  
    for (var i = 0; i < e.target.files.length; i++) {  
      this.myFiles.push(e.target.files[i]);  
    }  
  }  
  uploadFiles1() {  
    console.log(this.uploader.queue);
   
    this.httpService.post("http://localhost:5000/api/Products/UploadFiles/", this.uploader.queue).subscribe(  
      data => {  
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.  
        this.sMsg = data as string;  
        //console.log(this.sMsg);  
      }  
    );  
  }

  uploadFiles() {  
    const frmData = new FormData();  
    for (var i = 0; i < this.myFiles.length; i++) {  
      frmData.append("fileUpload", this.myFiles[i]);  
      if (i == 0) {  
        frmData.append("remark", this.remark);  
      }   //console.log(this.myFiles[i]);
    }  
     //console.log(this.myFiles[i]);
    this.httpService.post("http://localhost:5000/api/Products/UploadFiles/", frmData).subscribe(  
      data => {  
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.  
        
        //this.sMsg = data as string;  
        console.log(data);  
      }  
    );  
  }  
}
