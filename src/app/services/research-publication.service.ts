import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResearchPublicationService {
  Url = environment.url + "research-publication/api/";
  constructor(
    private http:HttpClient
  ) { }


getResearchPublicationDataService(){
  return this.http.get(this.Url+"publication")
}
getResearchPublicationDatabyIDService(id:any){
  return this.http.get(this.Url+"publication/"+id)
}
}
