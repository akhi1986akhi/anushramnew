import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VideoBlogService {
  Url = environment.url + "video-blog/api/";
  constructor(

    private http:HttpClient
  ) { }

getVideoBlogService(){
  return this.http.get(this.Url+"blog");
}
  
}
