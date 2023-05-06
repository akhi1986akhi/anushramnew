import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  userName="Akhilesh";
  isLogin!:boolean;
  currentUser:any ;
  userRole:any;
  navigate='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLogin")=='true'){
      this.isLogin=true;

    }else if(this.isLogin!=true){
      this.router.navigate(['/'])
    }
    if(localStorage.getItem('user')){
      this.currentUser = JSON.stringify(localStorage.getItem("user"))
      let x =JSON.parse(JSON.parse(this.currentUser));
      this.userName = x.fname+" "+x.lname;
      this.userRole = x.role;
      // console.log(this.userRole)
      if(this.userRole =='Mentor'){
        this.navigate="/mentor-dash"
      }else{
        this.navigate="/user-dash/user-dashboard"
      }
    }
  }

  logout(){
    localStorage.removeItem("isLogin");
    localStorage.removeItem('profileImage')
    localStorage.removeItem('user');
    this.router.navigate(['/'])
    this.isLogin=false;
  }
}
