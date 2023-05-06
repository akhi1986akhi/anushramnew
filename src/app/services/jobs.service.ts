import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class JobsService {
  Url = environment.url+"job/api/";
  constructor(
    private http: HttpClient
  ) { }

  getAllJobsDataService() {
    return this.http.get(this.Url+"jobs-post")
  }
}
