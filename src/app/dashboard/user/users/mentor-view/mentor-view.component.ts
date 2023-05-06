import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-mentor-view',
  templateUrl: './mentor-view.component.html',
  styleUrls: ['./mentor-view.component.scss']
})
export class MentorViewComponent implements OnInit {
  mentor:any=[];
  constructor(private user:UserDataService,private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getUserData();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);

    
  }
getUserData(){
  this.spinner.show();
  this.user.getUserDataService().subscribe((result:any)=>{
    this.mentor=result?.mentors;
    // this.mentor=[];
   
    this.spinner.hide();
  })
}
}
