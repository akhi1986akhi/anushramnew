import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-mentor-view-card',
  templateUrl: './mentor-view-card.component.html',
  styleUrls: ['./mentor-view-card.component.scss']
})
export class MentorViewCardComponent implements OnInit {
  mentor:any=[];
  constructor(private user:UserDataService) { }

  ngOnInit(): void {

    this.getUserData();
  }
  getUserData(){
    this.user.getUserDataService().subscribe((result:any)=>{

      this.mentor=result.mentors;
   
  
    })
  }
}
