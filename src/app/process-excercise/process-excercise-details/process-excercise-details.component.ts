import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process-excercise-details',
  templateUrl: './process-excercise-details.component.html',
  styleUrls: ['./process-excercise-details.component.scss']
})
export class ProcessExcerciseDetailsComponent implements OnInit {
  exResRepo:boolean=false;
  synopsisIndexSample:boolean=false;
  areaOfInterest:boolean=false;
 
  constructor(
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let query=this.router.snapshot.paramMap.get('id');
    console.log(query)
    if(query=='Research Repository'){
      this.synopsisIndexSample=false;
      this.exResRepo=true;
      
    }else if(query=='Synosis Framework'){
      this.exResRepo=false;
   
      this.synopsisIndexSample=true;
    }else if(query=='area-of-interest'){
      this.areaOfInterest=true;
 
    }

  }

}
