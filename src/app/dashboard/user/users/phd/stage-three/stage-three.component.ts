import { Component, OnInit } from '@angular/core';
import { PhdService } from 'src/app/services/phd.service';

@Component({
  selector: 'app-stage-three',
  templateUrl: './stage-three.component.html',
  styleUrls: ['./stage-three.component.scss']
})
export class StageThreeComponent implements OnInit {

  data:any;
  constructor(
    private phdService:PhdService
  ) { }

  ngOnInit(): void {
    this. getPhdData();
  }

  getPhdData(){
    this.phdService.getPhdDataService('stageThree').subscribe((result:any)=>{
  
      this.data=result.result;
    })
  }

}
