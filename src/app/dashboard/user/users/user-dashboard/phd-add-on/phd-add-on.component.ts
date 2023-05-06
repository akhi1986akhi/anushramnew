import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MentorRequestService } from 'src/app/services/mentor-request.service';

@Component({
  selector: 'app-phd-add-on',
  templateUrl: './phd-add-on.component.html',
  styleUrls: ['./phd-add-on.component.scss']
})
export class PhdAddOnComponent implements OnInit {
  Mentoring: boolean = false;
  MockViva: boolean = false;
  mockVivaForm!: FormGroup;
  MentorRequestForm!: FormGroup;
  services = [
    {
      title: "Mentoring",
      description: "If at any point of time, candidates feel that they are struggling to understand a particular piece of research, or if they feel misguided or confused, they may seek help from a panel of experts linked with Anushram. These are academicians who have completed a PhD, sometimes multiple PhDs, and whose experience will help students find their way again.",
      image: 'assets/img/vidyapun-mentoring.png',
      btn: true,
    },
    {
      title: "Mock-Viva",
      description: "Mock vivas will be held to ensure that PhD scholars are fully prepared for the open defence of their thesis. It will involve understanding what kinds of questions will be asked, how answers should be framed for the best impact, and how to stay calm under rigorous questioning. Mock vivas will boost the candidate's ability to perform.",
      image: 'assets/img/vidyapun-study.webp',
      btn: true,
    },
    {
      title: "Career",
      description: "Anushram and related platforms provide career counseling, to ensure that you are able to make the most of your PhD in the corporate world. Career counseling and placement services facilitate the movement of your biodata, recordings of your open defence and other relevant resources to desired workplaces",
      image: 'assets/img/vidyapun-quiz.webp',
      btn: false,
    },
    {
      title: "Support Material",
      description: "Anushram and related platforms provide career counseling, to ensure that you are able to make the most of your PhD in the corporate world. Career counseling and placement services facilitate the movement of your biodata, recordings of your open defence and other relevant resources to desired workplaces",
      image: 'assets/img/vidyapun-vi-va.webp',
      btn: false,
    }

  ]
  constructor(

    private service:MentorRequestService
  ) { }

  ngOnInit(): void {

    this.setMockVivaForm();
    this.setMentorForm();
  }

  setMockVivaForm() {
    this.mockVivaForm = new FormGroup({
      type: new FormControl('Mock vi-va'),
      name: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      subject: new FormControl(''),
      date: new FormControl(''),
      timeSlot: new FormControl('02:30PM - 4:00PM'),
      status: new FormControl('Processing'),
    })
  }

  setMentorForm() {
    this.MentorRequestForm = new FormGroup({
      type: new FormControl('Mentor Request'),
      name: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      subject: new FormControl(''),
      date: new FormControl(''),
      timeSlot: new FormControl(''),
      status: new FormControl('Processing')
    })
  }
  getID(e: any) {
    console.log(e);
    this.MockViva = false;
    this.Mentoring = false;
    if (e == 'Mentoring') {
      this.Mentoring = true;
    } else if (e == 'Mock-Viva') {
      this.MockViva = true;
    }
  }
  getTimeSlot(t:String){
    console.log(t);
    this.mockVivaForm.value.timeSlot=t;

    console.log(this.mockVivaForm.value);

    this.MentorRequestForm.value.timeSlot=t;
  }
  submit(e:any) {

    if(e=='mock'){
      console.log(this.mockVivaForm.value)

      var d1=new Date(JSON.stringify(this.mockVivaForm.value.date)).toLocaleDateString(); //yyyy-mm-dd  
  
      var d3=new Date().toLocaleDateString(); //yyyy-mm-dd  
      
      if(d1 <= d3){
        alert("please select correct date")
      }
  
      if(this.mockVivaForm.value.name == ""){
        return alert("please enter your name?")
      }else if(this.mockVivaForm.value.email == ""){
        return alert("please enter your email?")
      }else if(this.mockVivaForm.value.contact == ""){
        return alert("please enter your contact?")
      }else if(this.mockVivaForm.value.subject == ""){
        return alert("please enter your subject?")
      }else if(this.mockVivaForm.value.date == ""){
        console.log(this.mockVivaForm.value.date);
        console.log(Date.now().toLocaleString());
        return alert("please select correct date?")
      }else if(this.mockVivaForm.value.timeSlot == ""){
        return alert("please select correct time slot?")
      }
  
      this.service.postMockvivaService(this.mockVivaForm.value).subscribe((result:any) => {
        console.log("result is here:",result['doc'].requestID);
        // Swal.fire(`Request Successfull`, `Request ID:${result['doc'].requestID}`, "success");
  
        alert(`Request Successfull! Request ID:${result['doc'].requestID}`)
       
      });
      this.mockVivaForm.reset();
    }else if(e=='mentor'){

      console.log(this.MentorRequestForm.value);
    }
   
  }
}
