import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MentorRegistrationService } from 'src/app/services/mentor-registration.service';

@Component({
  selector: 'app-mentor-registration',
  templateUrl: './mentor-registration.component.html',
  styleUrls: ['./mentor-registration.component.scss']
})
export class MentorRegistrationComponent implements OnInit {
  mentorRegistrationForm!:any;
  constructor(private mentorService:MentorRegistrationService) { }
  msg:any | undefined;
  ngOnInit(): void {

    this.setMentorRegistrationForm();
  }

  setMentorRegistrationForm(){
    this.mentorRegistrationForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
  }
  Submit(){

    this.msg='';
    console.log("form submitted")
    console.log(this.mentorRegistrationForm.value)
    this.mentorService.registerMentors(this.mentorRegistrationForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result['msg']=='Records Saved Successfully'){
        this.mentorRegistrationForm.reset();
        this.msg = "Thank You! Registration Successfull"
      }else if(result['msgErr']=='Email Already Exits'){
        this.mentorRegistrationForm.reset();
        this.msg='Email Already Exits'
      }
    })
  }
}
