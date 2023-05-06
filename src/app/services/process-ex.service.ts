import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProcessExService {
  Url = environment.url+"anushram-excercise/api/";


  constructor(
    private http:HttpClient

  ) { }
  getExDataService(){
    return this.http.get(this.Url+"ex/stageTwo");
  }
}
