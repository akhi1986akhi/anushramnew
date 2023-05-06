import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import {Register, Login} from '../models/data-types';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  Url = environment.url+"anus/api/";

  constructor(private http:HttpClient) { }

registerUser(data:Register){

  return this.http.post<Register>(this.Url+"register/user",data)
}
registerUserBySocial(data:any){
  return this.http.post<Register>(this.Url+"register/social",data)
}
loginUser(data:Login){
  debugger
  return this.http.post<Login>(this.Url+"login",data)
}


loginWithFacebook(accessToken: string, userID: string): Observable<any> {
  const url = `${this.Url}/facebook-login`;
  const body = { accessToken, userID };
  return this.http.post(url, body);
}
}
