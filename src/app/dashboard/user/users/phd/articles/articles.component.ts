import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhdService } from 'src/app/services/phd.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  data:any;
  title='';
  constructor(
    private router:ActivatedRoute,
    private phdSer:PhdService
  ) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get('id');
    this.getData(id);
    
  }
getData(id:any){
  this.phdSer.getPhdDatabyIDService(id).subscribe((result:any)=>{

    this.data=result.result;
 
    this.title=this.data.title;
  })
}
}
