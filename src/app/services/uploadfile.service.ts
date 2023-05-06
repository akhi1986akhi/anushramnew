import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UploadfileService {
  Url = environment.url +"anus/api/";
  constructor(private http:HttpClient) { }

  uploadFileService(data:any,id:any){
    return this.http.put(this.Url+"upload/profile-image/"+id,data);
  }

  uploadDocService(data:any,id:any){
    return this.http.put(this.Url+"upload/document/"+id,data);
  }
  uploadVideoService(data:any,id:any){
    return this.http.put(this.Url+"upload/video/"+id,data);
  }

  getVideoService(id:any){
    return this.http.get(this.Url+"upload/"+id)
  }
}
