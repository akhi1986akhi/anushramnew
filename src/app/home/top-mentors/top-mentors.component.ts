import { Component, OnInit } from '@angular/core';
import { MentorRegistrationService } from 'src/app/services/mentor-registration.service';

@Component({
  selector: 'app-top-mentors',
  templateUrl: './top-mentors.component.html',
  styleUrls: ['./top-mentors.component.scss']
})
export class TopMentorsComponent implements OnInit {
  mentorData:any | undefined;
  constructor(private service: MentorRegistrationService) { }

  ngOnInit(): void {
    this.getResumeData();
  }
  getResumeData(){
    this.service.getResumeOceanMentorService().subscribe((result)=>{
      this.mentorData=result;
      // console.log(this.mentorData)
    })
  }
}
