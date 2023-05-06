import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Login } from 'src/app/models/data-types';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin!:boolean;
  user: any;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  
  signUp: boolean = false;
  SignIn: boolean = true;
  loginBg = "#fff";
  signUpBg = "#e8f0e8";
  message='';

  // loggedIn: boolean | undefined;
  constructor(private router: Router, private spinner: NgxSpinnerService, private authService: SocialAuthService, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.setRegisterForm();
    this.setLoginForm();
    window.scroll(0,0)
   
    

    if(localStorage.getItem("isLogin")=='true'){
      this.router.navigate(['/user-dash/user-dashboard']);
      this.isLogin=true;
    }


    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 500);

   

  
  }


  setRegisterForm() {
    this.registerForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      city: new FormControl(''),
      password: new FormControl(''),
      role:new FormControl('student')
    })
  }

  setLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  login() {
   
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.registerService.loginUser(this.loginForm.value).subscribe((result:any)=>{
      console.log("login result is test",result['msg']);
      console.log(result);
      if(result['status']=='success'){
        alert(result['msg']);
        this.router.navigate(['/user-dash/user-dashboard']).then(()=>{
          window.location.reload();
        })
        localStorage.setItem("isLogin", "true");

        let userData={id:result.ID,fname:result.fname,lname:result.lname,email:result.email}
        localStorage.setItem("user",JSON.stringify(userData));
        localStorage.setItem("profileImage",result.photo);
        // console.log(result['doc'].profile.photo)

        // window.location.reload();
      }else if(result['status']=='error'){
        alert(result['msg']);
      }
    })


  }


  signInWithGoogle(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      // this.loggedIn = (user != null);
      console.log("login by google",user);
      this.registerService.registerUserBySocial(user).subscribe((result:any)=>{
        console.log(result)
        console.log(result['doc'])
        localStorage.setItem("isLogin", "true");
        let userData={id:result['doc']._id,fname:result['doc'].login.fname,lname:result['doc'].login.lname,email:result['doc'].login.email}
        localStorage.setItem("user",JSON.stringify(userData));
        if(result['doc'].profile != undefined && result['doc'].profile.photo!= undefined){

          localStorage.setItem("profileImage",result['doc'].profile.photo);
          console.log(result['doc'].profile.photo)
        }
        alert("Social Login Successfull");
        this.router.navigate(['/user-dash/user-dashboard']).then(()=>{
          window.location.reload();
        })
      })

    });

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }


  register() {
    this.message='';


    console.log(this.registerForm.value.password)

    let tm = '';

    for(let i=0; i< this.registerForm.value.password.length;i++){

      if(this.registerForm.value.password[i]!=' '){
        tm=tm+this.registerForm.value.password[i]
      }
    }


this.registerForm.value.password=tm;

    this.registerService.registerUser(this.registerForm.value).subscribe((result:any)=>{


      if(result['msg']){
        this.message = result['msg'];
        alert(this.message);
        this.registerForm.reset();
      }
    })
  }

  loginSignup(value: any) {
    if (value == 'login') {
      this.signUp = false;
      this.SignIn = true;

      this.loginBg = "#fff";
      this.signUpBg = "#e8f0e8"

    } else if (value == 'register') {
      this.signUp = true;
      this.SignIn = false;

      this.loginBg = "#e8f0e8";
      this.signUpBg = "#fff"

    }


  }
}
