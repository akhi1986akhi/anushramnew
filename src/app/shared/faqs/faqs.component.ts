import { Component, OnInit } from '@angular/core';
import { FaqsService } from 'src/app/services/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
data:any;

  constructor(

    private service:FaqsService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);

    this.getData();
  }
getData(){
  this.service.getFaqsService().subscribe((result:any)=>{
    console.log(result);
    this.data=result.result;

    console.log(this.data);
  })
}
}
