import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MentorRequestService {
  Url = environment.url + "anushram/api/";
  constructor(
    private http:HttpClient
  ) { }


  postMockvivaService(data:any){
    return this.http.post(this.Url+"mentorRequestForm",data)
  }
}
