import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ResearchRepoService {
  Url = environment.url+"phdrepo/api/";
  constructor(
    private http:HttpClient
  ) { }

  getAllPhdRepoDataService(){
    return this.http.get(this.Url+"repo");
  }
}
