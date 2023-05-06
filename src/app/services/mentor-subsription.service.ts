import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MentorSubsriptionService {
  Url = environment.url + "mentor-subscription/api/";
  constructor(
    private http:HttpClient
  ) { }

  postMentorSubsriptionService(data:any){
    return this.http.post(this.Url+"subsription",data)
  }
}
