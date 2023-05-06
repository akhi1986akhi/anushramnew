import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  Url = environment.url + "notification/api/";
  constructor(
    private http:HttpClient
  ) { }


  getNotificationService(){
   return this.http.get(this.Url+"notification")
  }
}
