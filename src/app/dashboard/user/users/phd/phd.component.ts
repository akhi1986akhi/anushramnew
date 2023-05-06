import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phd',
  templateUrl: './phd.component.html',
  styleUrls: ['./phd.component.scss']
})
export class PhdComponent implements OnInit {
  stageTwo:boolean=false;
  stageOne:boolean=false;
  stageThree:boolean=false;
  title='';
  constructor(
    private router:ActivatedRoute

  ) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get('id')

    if(id=='stageTwo'){
  
      this.stageOne=false;
      this.stageThree=false;
      this.stageTwo=true;
      this.title='Advanced Learning';
    }else if(id=='stageThree'){
      this.stageTwo=false;
      this.stageOne=false;
      this.stageThree=true;
      this.title='Research & Execute Ph.D.';
    }else if(id=='stageOne'){
      this.stageTwo=false;
      this.stageThree=false;
      this.stageOne=true;
      this.title='Ph.D Admission';
    }
  }

}
