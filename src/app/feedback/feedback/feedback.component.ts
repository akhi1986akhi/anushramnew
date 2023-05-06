import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!:FormGroup;
  message:boolean=false;
  userData:any;
  photo:any;
  constructor(

    private service: FeedbackService
  ) { }

  ngOnInit(): void {

    console.log(localStorage.getItem('user'));

    let user = JSON.stringify(localStorage.getItem('user'));
    this.userData = JSON.parse(JSON.parse(user));
    this.photo = localStorage.getItem("profileImage")
    this.setFeedbackForm();
  }


  setFeedbackForm(){
    this.feedbackForm= new FormGroup({
      firstName: new FormControl(this.userData.fname),
      lastName: new FormControl(this.userData.lname),
      fullName: new FormControl(this.userData.fname+" "+this.userData.lname),
      email: new FormControl(this.userData.email),
      title: new FormControl(''),
      description:new FormControl(''),
      image:new FormControl(this.photo),
    })
  }
  submit(){
    console.log(this.feedbackForm.value);
    if(this.feedbackForm.value.description.length < 10){
      return alert("Please Fill Valid Feedback!")
    }
    this.service.postFeedbackService(this.feedbackForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.status=='success'){
        this.message=true;
      }
    })
  }

}
