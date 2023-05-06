import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  Url = environment.url + "feedback/api/";
  constructor(
    private http:HttpClient,
  ) { }


  postFeedbackService(data:any){
    return this.http.post(this.Url+"feedback",data);
  }
}
