import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class PhdService {
  Url = environment.phdUrl;

  constructor(
    private http:HttpClient
  ) { }

  getPhdDataService(stage:any){
    return this.http.get(this.Url+"/bystage/"+stage)
  }
  getPhdDatabyIDService(id:any){
    return this.http.get(this.Url+"/byid/"+id)
  }
}
