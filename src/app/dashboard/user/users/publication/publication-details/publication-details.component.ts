import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResearchPublicationService } from 'src/app/services/research-publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
})
export class PublicationDetailsComponent implements OnInit {
  title='';
  stepTitle='';
  stepLabel='';
  researchData:any;
  constructor(
    private actRoute:ActivatedRoute,
    private service:ResearchPublicationService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    let id=this.actRoute.snapshot.paramMap.get('id')
    console.log(id)

    this.getDataByID(id);
    
  }


  getDataByID(id:any){
    this.service.getResearchPublicationDatabyIDService(id).subscribe((data:any)=>{
      console.log(data)
      this.researchData=data.result[0]
      console.log(this.researchData)
      this.title=this.researchData.title;
     
    })
  }

  getID(id:any){
    console.log(id)
    let data=this.researchData.steps.find((item: { _id: any; })=> item._id==id);
    console.log(data)
    this.stepTitle=data.title;
    this.stepLabel=data.ques;
  }
}
