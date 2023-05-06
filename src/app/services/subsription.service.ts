import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class SubsriptionService {
// url="http://localhost:3003/anusub/api/";
url = environment.url+"anusub/api/";

  constructor(
    private http:HttpClient
  ) { }


  postSubscriptionService(data:any){
    return this.http.post(this.url+"subsription",data)
  }

  getSubscriptionByEmailService(email:any){
    return this.http.get(this.url+"subscription/"+email)
  }

}
