import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StateService {
 
  constructor(private http:HttpClient) { }

  getStateService(){
    return this.http.get("https://prayug.co/state");
  }
}
