import { Component, OnInit } from '@angular/core';
import { PhdService } from 'src/app/services/phd.service';

@Component({
  selector: 'app-stage-two',
  templateUrl: './stage-two.component.html',
  styleUrls: ['./stage-two.component.scss']
})
export class StageTwoComponent implements OnInit {
  data:any;
  constructor(
    private phdService:PhdService
  ) { }

  ngOnInit(): void {
    this. getPhdData();
  }

  getPhdData(){
    this.phdService.getPhdDataService('stageTwo').subscribe((result:any)=>{
      this.data=result.result;
      console.log(this.data);
    })
  }
}
