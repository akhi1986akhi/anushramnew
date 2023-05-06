import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificate-home',
  templateUrl: './certificate-home.component.html',
  styleUrls: ['./certificate-home.component.scss']
})
export class CertificateHomeComponent implements OnInit {


  List:any;

  
  constructor(
    private service:CertificateService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.getData();
  }

  navigate(id:any,title:any){
    console.log(id);

    let data=this.List.find((item: { _id: any; })=> item._id==id);
    console.log(data);
   let newTitle= title.replace(/ /g,"-")
    this.router.navigate([`certificate/${newTitle}`],{queryParams:{item:JSON.stringify(data)}})
  }

  getData(){
    this.service.getCertificateDataService().subscribe((data:any)=>{
      // console.log(data);
      this.List=data.result;
      console.log(this.List);
    })
  }
}
