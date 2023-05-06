import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MentorRegistrationService } from 'src/app/services/mentor-registration.service';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.scss']
})
export class MentorLoginComponent implements OnInit {
  mentorLoginForm!:FormGroup;
  user:any;
  constructor(private service: MentorRegistrationService, private router:Router) { }

  ngOnInit(): void {
    this.setMentorLoginForm();
  }

  setMentorLoginForm(){
    this.mentorLoginForm= new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  Submit(){
    // console.log("Submit form")

    // console.log(this.mentorLoginForm.value);

    this.service.LoginService(this.mentorLoginForm.value).subscribe((result:any)=>{
    
      console.log(result)
      if(result.status =='success'){
        this.user= result.data;
        // console.log(this.user);
        localStorage.clear();
        localStorage.setItem("user",JSON.stringify(this.user));
        localStorage.setItem("isLogin", "true");
        
        this.router.navigate(['/mentor-dash']).then(()=>{
          window.location.reload();
        })
        alert("Login Successfull..!")

      }else if(result.status =='fail'){
        alert("user emai lor password wrong!")
      }
    })
  }
}
