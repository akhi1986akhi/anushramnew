import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import{Newsletter} from '../models/data-types';
@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  Url = environment.url + "newsletter/api/";
  constructor(
    private http: HttpClient
  ) { }


  postNewsLetterService(data:Newsletter) {
    return this.http.post(this.Url + "newsletter",data);
  }
}
