import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
import { Profile } from '../models/data-types';
import { Education } from '../models/data-types';
import { Employment } from '../models/data-types';
@Injectable({
  providedIn: 'root'
})


export class UserDataService {

  Url = environment.url+"anus/api/";
  user = JSON.stringify(localStorage.getItem('user'));
  userData = JSON.parse(JSON.parse(this.user));
  constructor(private http:HttpClient) { }

getUserDataService(){



  return this.http.get(this.Url+"user/"+this.userData.id);
}
getUserDataCommunicationService(){

  return this.http.get(this.Url+"communication/"+this.userData.id);
}

getUserProgressMapService(){

  return this.http.get(this.Url+"progressmap/"+this.userData.id);
}
updateUserProfileService(data:Profile,val:any){
  return this.http.put(this.Url+"update/"+val+"/"+this.userData.id,data);
}
updateUserEducationService(data:Education,val:any){
  return this.http.put(this.Url+"update/"+val+"/"+this.userData.id,data);
}
updateUserEmploymentService(data:Employment,val:any){
  return this.http.put(this.Url+"update/"+val+"/"+this.userData.id,data);
}
updateUserProgressMapService(data:any,val:any){
  return this.http.put(this.Url+"update/"+val+"/"+this.userData.id,data);
}
updateUserAboutService(data:Employment,val:any){
  return this.http.put(this.Url+"update/"+val+"/"+this.userData.id,data);
}
updateUserProgressMapAttService(data:any,val:any,id:any){
  return this.http.put(this.Url+"update/"+val+"/"+id,data);
}
updateUserCommunicationService(data:Education,val:any){
  return this.http.put(this.Url+"update/"+val+"/"+this.userData.id,data);
}
}
