import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Register } from '../models/data-types';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MentorRegistrationService {
  url = environment.adminUrl;
  mentorUrl=environment.mentorUrl;

  resume = environment.resumeUrl;
  constructor(private http:HttpClient) { }


  registerMentors(data:Register){

    return this.http.post<Register>(this.url+"mentor/reg/user",data)
  }

  LoginService(data:Login){
    return this.http.post<Register>(this.mentorUrl+"/login",data);
  }

  getResumeOceanMentorService(){
    return this.http.get(this.resume);
  }

}
