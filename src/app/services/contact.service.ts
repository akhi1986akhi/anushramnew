import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {contactus} from '../models/data-types'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  Url = environment.url + "contactus/api/";
  constructor(
    private http:HttpClient
  ) { }

  postContactusService(data:contactus){
    return this.http.post(this.Url+"contactus", data)
  }
}
