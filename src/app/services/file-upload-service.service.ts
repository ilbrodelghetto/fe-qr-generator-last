import { Photo } from './../models/Photo';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  private urlEndPoint : string = 'http://167.172.36.108:8888';

  caricaFoto(archivio: File, id): Observable<any> {
    let formData = new FormData();
    formData.append("image", archivio);
    formData.append("title", id);
    console.log("form data -----> " + formData);
    const req = new HttpRequest('POST', `${this.urlEndPoint}/photos/add`, formData, {
      reportProgress: true,
    });
    return this.http.request(req);

  }

  recuperaImmagine(id : string) : Observable<any> {
    return this.http.get(`${this.urlEndPoint}/photos/` + id, {responseType: 'text'});
  }

  
}
