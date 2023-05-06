import { Component, OnInit } from '@angular/core';
import { ResearchPublicationService } from 'src/app/services/research-publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  listItem=[1,2,3,4]
  ListData:any;
  constructor(

    private service: ResearchPublicationService
  ) { }

  ngOnInit(): void {
    this.getResearchPubData();
  }
getResearchPubData(){
  this.service.getResearchPublicationDataService().subscribe((result:any)=>{
    // console.log(result.result)
    this.ListData=result.result

    // console.log(this.ListData)
  })
}
}
