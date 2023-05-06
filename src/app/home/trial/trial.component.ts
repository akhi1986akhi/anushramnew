import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
  message='';
  registerForm!:FormGroup;
  constructor(
    private service:RegisterService
  ) { }

  ngOnInit(): void {

    this.setRegisterForm();
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
  register() {
    this.message='';
   
    this.service.registerUser(this.registerForm.value).subscribe((result:any)=>{

      if(result['msg']){
        this.message = result['msg'];
        alert(this.message);
        this.registerForm.reset();
      }
    })
  }
}
