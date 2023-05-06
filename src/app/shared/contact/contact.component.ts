import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  message='';
  constructor(

    private service:ContactService
  ) { }

  ngOnInit(): void {
    this.setContactForm();
  }


  setContactForm(){
    this.contactForm= new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
      website: new FormControl('anushram.com')

    })
  }

  submit(){
    // console.log(this.contactForm.value);

    this.service.postContactusService(this.contactForm.value).subscribe((result:any)=>{
      if(result.status=='success'){
        this.contactForm.reset();
        this.message=result.msg;
        alert("Thanks for being awesome! We have received your message and would like to thank you for writing to us")
      }else{
        alert("Error..!")
      }
    })
    
  }
}
