import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-scholler-summary',
  templateUrl: './scholler-summary.component.html',
  styleUrls: ['./scholler-summary.component.scss']
})
export class SchollerSummaryComponent implements OnInit {
  @ViewChild('content',{
    static:false
  })el!:ElementRef

  userData: any;
  photo: any = '';

  constructor(

    private update: UserDataService
  ) { }

  ngOnInit(): void {
    localStorage.getItem('profileImage')
    if (localStorage.getItem('profileImage')) {
      this.photo = localStorage.getItem('profileImage');
      // console.log(this.photo);
    }
    this.getUserData();
  }
  getUserData() {
    this.update.getUserDataService().subscribe((result: any) => {


      this.userData = result;
      // console.log(this.userData);

    })
  }

  print() {

    window.print();
  }

  makepdf() {
    const doc = new jsPDF();

    // doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");
    doc.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("sample.pdf")
      }
    })

    
  }
}
