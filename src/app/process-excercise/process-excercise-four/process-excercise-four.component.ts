import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-excercise-four',
  templateUrl: './process-excercise-four.component.html',
  styleUrls: ['./process-excercise-four.component.scss']
})
export class ProcessExcerciseFourComponent implements OnInit {
  title='Research Defence - Stage 4';
  levelFour={
    title: "Level II",
    caption: "",
    image: "assets/img/vidyapun-layer2.png",
    video: "",
    topics: [
  
      {
        title: "Pre-Submission",
        caption: "",
        image: "",
        video: "",
        btnID:"title",
        form:[
          {
            label:'Viva preparation',
            placeholder:''
          },
          {
            label:'Things you may wish to take with you',
            placeholder:''
          },
          {
            label:'During the viva',
            placeholder:''
          },
          {
            label:'Useful tips for during your viva',
            placeholder:''
          },
          {
            label:'How can PhD students best prepare?',
            placeholder:''
          }
          
        ]
      },
      {
        title: "Mock Vi-va",
        caption: "",
        image: "",
        video: "",
        btnID:"literature-review",
        form:[
          {
            label:'Request for Mock-Vi-va',
            placeholder:'Enter here Title...'
          },
   
          
        ]
      },
      {
        title: "Review Assesment",
        caption: "",
        image: "",
        video: "",
        form:[
         
          
        ]
      },
      {
        title: "Corrected Thesis",
        caption: "",
        image: "",
        video: "",
        form:[
     
     
        ]
      },
      {
        title: "Mock Defence Vi-va",
        caption: "",
        image: "",
        video: "",
        form:[
          {
            label:'Request for Mock-Vi-va',
            placeholder:'Enter here Title...'
          },
    
        ]
      }
  
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }
  getBtnID(id:any){
    console.log(id)
  }
}
