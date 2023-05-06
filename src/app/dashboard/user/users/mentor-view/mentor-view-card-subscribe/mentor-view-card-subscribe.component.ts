import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MentorSubsriptionService } from 'src/app/services/mentor-subsription.service';

@Component({
  selector: 'app-mentor-view-card-subscribe',
  templateUrl: './mentor-view-card-subscribe.component.html',
  styleUrls: ['./mentor-view-card-subscribe.component.scss']
})
export class MentorViewCardSubscribeComponent implements OnInit {
  mentorSubsForm!:FormGroup;
  userData:any;
  constructor(

    private service:MentorSubsriptionService
  ) { }

  ngOnInit(): void {
    let user = JSON.stringify(localStorage.getItem('user'));
    this.userData = JSON.parse(JSON.parse(user));
    console.log(this.userData)
    this.setMentorSubsForm();
  }
setMentorSubsForm(){
  this.mentorSubsForm= new FormGroup({
    name: new FormControl(this.userData.fname+" "+this.userData.lname),
    email:new FormControl(this.userData.email),
    contact: new FormControl('7007761116'),
    website: new FormControl('ansuhram.com'),
    subject: new FormControl('Ph.D'),
    status:new FormControl('process'),
  })
}

submit(){



  this.service.postMentorSubsriptionService(this.mentorSubsForm.value).subscribe((result:any)=>{
    console.log(result);
    if(result.status='success'){
      alert(result.msg)
    }else{
      alert("Error...!")
    }
  })

}
}
