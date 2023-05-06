import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  newsForm!:FormGroup;
  constructor(

    private service:NewsletterService,

  ) { }

  ngOnInit(): void {

    this.setNewsForm();
  }
  setNewsForm(){
    this.newsForm= new FormGroup({
      email:new FormControl(''),
      subscribedFor: new FormControl('anushram.com'),
      status: new FormControl(true),

    })
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  subcribe(){


    this.service.postNewsLetterService(this.newsForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result.status=='success'){
        alert("Successfully subcribed");
        this.newsForm.reset();
      }else if(result.status=='duplicate'){
        alert("Thank You! You have already subscribed for news letter.");
        this.newsForm.reset();
      }
    })
  }
  
}
