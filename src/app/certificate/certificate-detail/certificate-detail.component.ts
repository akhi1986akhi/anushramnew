import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificate-detail',
  templateUrl: './certificate-detail.component.html',
  styleUrls: ['./certificate-detail.component.scss']
})
export class CertificateDetailComponent implements OnInit {
  title:any;
  data:any;
  constructor(
    private actRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let titleParam= this.actRoute.snapshot.paramMap.get('title')

    this.title=titleParam;

   this.actRoute.queryParams.subscribe((params:any)=>{
  
      this.data=JSON.parse(params.item);
      console.log(this.data)
    })
  }

}
