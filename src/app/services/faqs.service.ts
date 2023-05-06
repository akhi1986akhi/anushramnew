import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  Url = environment.url + "faqs/api/";
  constructor(
    private http:HttpClient
  ) { }


  getFaqsService(){
    return this.http.get(this.Url+"anushram");
  }
}
