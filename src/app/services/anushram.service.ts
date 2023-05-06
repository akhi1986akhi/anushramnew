import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AnushramService {

  Url = environment.url+"anus/api/";
  constructor(
    private http:HttpClient
  ) { }

  putAnushramWrEnqService(data:any){
    return this.http.put(this.Url+"writing-inquery",data)
  }

  getAnushramWrEnqService(){
    return this.http.get(this.Url+"writing-inquery")
  }


  // EDIT PROFILE API

  editAnushramProfileService(data:any,val:any){
    return this.http.put(this.Url+"edit/"+val,data);
  }
}
