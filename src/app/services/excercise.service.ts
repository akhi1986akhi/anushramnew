import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {leveltwo,levelone} from '../models/data-types'
@Injectable({
  providedIn: 'root'
})
export class ExcerciseService {
  Url = environment.url+"anus/api/";

  user = JSON.stringify(localStorage.getItem('user'));
  userData = JSON.parse(JSON.parse(this.user));
  constructor(
    private http:HttpClient
  ) { }

  getUserLevelTwoExcerciseDataService(){
    return this.http.get(this.Url+"excercise/levelTwo/"+this.userData.id)
  }

  putExcerciseLeveOneService(data:any,val:String){
    return this.http.put(this.Url+"excercise/levelOne/"+val+"/"+this.userData.id,data);
  }
  getExcerciseLeveOneService(val:String){
    return this.http.get(this.Url+"excercise/levelOne/"+val+"/"+this.userData.id);
  }


  putExcerciseLeveTwoService(data:leveltwo,val:String){
    return this.http.put(this.Url+"excercise/levelTwo/"+val+"/"+this.userData.id,data);
  }
 
}
