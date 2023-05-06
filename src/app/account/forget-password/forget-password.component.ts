import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword!:FormGroup;

  loginBg = "#fff";
  otpSent:boolean=false;
  
  constructor() { }

  ngOnInit(): void {

this.setForgetPassword();
  }
setForgetPassword(){
  this.forgetPassword= new FormGroup({
    email: new FormControl('')
  })
}

sendOTP(){
  console.log(this.forgetPassword.value);
  this.otpSent=true;
}

resetPassword(){
}
}
