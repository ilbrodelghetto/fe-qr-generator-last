import { FileUploadServiceService } from './../../services/file-upload-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  fileToUpload: File = null;
  imageName: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  id: any;
  alert: boolean;
  photo: any;

  constructor(private fileUploadService: FileUploadServiceService, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    console.log(files);
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    console.log("foto da caricare " + this.fileToUpload);
    this.fileUploadService.caricaFoto(this.fileToUpload, this.fileToUpload.name).subscribe(data => {
      this.alert = true;
      this.photo = data;
      console.log("dati ritornati dalla chiamata-----> " + this.photo.id);
    }, error => {
      console.log(error);
    });
  }

}