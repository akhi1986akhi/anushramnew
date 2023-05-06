import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  Url = environment.url + "certificate/api/";
  constructor(
    private http:HttpClient
  ) { }


  getCertificateDataService(){

    return this.http.get(this.Url+"certificate")
  }
}
