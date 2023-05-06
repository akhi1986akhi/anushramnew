import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs-station',
  templateUrl: './jobs-station.component.html',
  styleUrls: ['./jobs-station.component.scss']
})
export class JobsStationComponent implements OnInit {
  data:any;
  constructor(
    private service:JobsService
  ) { }

  ngOnInit(): void {
    this.getJobData();
  }
getJobData(){
  this.service.getAllJobsDataService().subscribe((result)=>{
 
    this.data=result
  })
}
}
