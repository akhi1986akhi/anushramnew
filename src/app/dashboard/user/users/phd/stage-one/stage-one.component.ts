import { Component, OnInit } from '@angular/core';
import { PhdService } from 'src/app/services/phd.service';

@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.scss']
})
export class StageOneComponent implements OnInit {
  data:any;
  constructor(
    private phdService:PhdService
  ) { }

  ngOnInit(): void {
    this. getPhdData();
  }

  getPhdData(){
    this.phdService.getPhdDataService('stageOne').subscribe((result:any)=>{
 
      this.data=result.result;
    })
  }

}
