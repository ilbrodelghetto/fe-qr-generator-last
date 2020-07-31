import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from 'src/app/services/file-upload-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-qr-shower',
  templateUrl: './qr-shower.component.html',
  styleUrls: ['./qr-shower.component.css']
})
export class QrShowerComponent implements OnInit {

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  id: string;

  constructor(private fileUploadService: FileUploadServiceService, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      (params: ParamMap) => {
        this.id = params.get('id');
        console.log("id----> " + this.id);
      }
    );
    this.httpClient.get('http://167.172.36.108:8888/photos/qr/' + this.id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.image.data;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}
