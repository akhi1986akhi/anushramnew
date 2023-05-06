import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-excercise-three',
  templateUrl: './process-excercise-three.component.html',
  styleUrls: ['./process-excercise-three.component.scss']
})
export class ProcessExcerciseThreeComponent implements OnInit {
title='Research Execution - Stage 3';
levelThree={
  title: "Level II",
  caption: "",
  image: "assets/img/vidyapun-layer2.png",
  video: "",
  topics: [

    {
      title: "Learn & Execute",
      caption: "",
      image: "",
      video: "",
      btnID:"title",
      form:[
        {
          label:'Visit to http://stumount.com/studentlogin.aspx',
          placeholder:'Enter here your approved title...'
        }
        
      ]
    },
    {
      title: "Coverpage",
      caption: "",
      image: "",
      video: "",
      btnID:"literature-review",
      form:[
        {
          label:'Title',
          placeholder:'Enter here Title...'
        },
        {
          label:'Scholar Name',
          placeholder:'Enter here Publcation Year...'
        },
        {
          label:'Enrollment Number',
          placeholder:'Enter here Article Title...'
        },
        {
          label:'Subject',
          placeholder:'Enter here Journal Name...'
        },
        {
          label:'University Logo',
          placeholder:'Enter here IISN...'
        },
        {
          label:'Supervisor Name',
          placeholder:'Enter here Review and Relevancy of your Research area...'
        },
        {
          label:'Co-Supervisor Name',
          placeholder:""
        },
        {
          label:'Department Name',
          placeholder:""
        },
        {
          label:'University Name',
          placeholder:""
        },
        {
          label:"Year of Submission",
          placeholder:""
        }
        
      ]
    },
    {
      title: "Front Page",
      caption: "",
      image: "",
      video: "",
      form:[
        {
          label:'Title',
          placeholder:'Enter here Title...'
        },
        {
          label:'Scholar Name',
          placeholder:'Enter here Publcation Year...'
        },
        {
          label:'Enrollment Number',
          placeholder:'Enter here Article Title...'
        },
        {
          label:'Subject',
          placeholder:'Enter here Journal Name...'
        },
        {
          label:'University Logo',
          placeholder:'Enter here IISN...'
        },
        {
          label:'Supervisor Name',
          placeholder:'Enter here Review and Relevancy of your Research area...'
        },
        {
          label:'Co-Supervisor Name',
          placeholder:""
        },
        {
          label:'Department Name',
          placeholder:""
        },
        {
          label:'University Name',
          placeholder:""
        },
        {
          label:"Year of Submission",
          placeholder:""
        }
        
      ]
    },
    {
      title: "Certificates",
      caption: "",
      image: "",
      video: "",
      form:[
        {
          label:'Scholar Certificate of Work',
          placeholder:'Enter here Reserch survey...'
        },
        {
          label:'Supervisor Certificate',
          placeholder:'Enter here Reserch survey...'
        },
        {
          label:'Plagiarism Certificate in university format',
          placeholder:'Enter here Reserch survey...'
        },
        {
          label:"Declaration certificate",
          placeholder:""
        },
        {
          label:"Examiner Certificate",
          placeholder:""
        },
   
      ]
    },
    {
      title: "Acknowledgement",
      caption: "",
      image: "",
      video: "",
      form:[
        {
          label:'Acknowledgement',
          placeholder:'Enter here description...'
        },
  
      ]
    },
    {
      title: "Abstract",
      caption: "",
      image: "",
      video: "",
      form:[
  
        
      ]
      
    },
    {
      title: "List of Contents",
      caption: "",
      image: "",
      video: "",
      form:[
       
        
        
      ]
    },
    {
      title: "List of Figures",
      caption: "",
      image: "",
      video: "",
      form:[
      
      ]
    },
    {
      title: "Abbreviation & Symbols",
      caption: "",
      image: "",
      video: "",
      form:[
       
      ]
    },
    {
      title: "Introduction",
      caption: "",
      image: "",
      video: "",
      form:[
        
      ]
    },
    {
      title: "Literature Review",
      caption: "",
      image: "",
      video: "",
      form:[
       
      ]
    },
    {
      title: "Research Methodology",
      caption: "",
      image: "",
      video: "",
      form:[
       
      ]
    },
    {
      title: "Result Analysis & Discussion",
      caption: "",
      image: "",
      video: "",
      form:[
        {
          label:'Data Analysis & Comparison',
          placeholder:'Enter Here Validation Method...'
        },
        {
          label:'Interpretation',
          placeholder:'Enter Here Validation Method...'
        },
        {
          label:'Objective Justification',
          placeholder:'Enter Here Validation Method...'
        },
        {
          label:'Hypotheses Testing',
          placeholder:'Enter Here Validation Method...'
        },
        {
          label:'Final Remarks',
          placeholder:'Enter Here Validation Method...'
        },
      ]
    },
    {
      title: "Conclusion",
      caption: "",
      image: "",
      video: "",
      form:[
        {
          label:'Result Explanation in order to objective sets',
          placeholder:'Enter Here Result Analysis/ Data Interpretation...'
        },
        {
          label:'Quantitative/ Qualitative value Display',
          placeholder:'Enter Here Result Analysis/ Data Interpretation...'
        },
        {
          label:'Suggestion',
          placeholder:'Enter Here Result Analysis/ Data Interpretation...'
        },
        {
          label:'Future Scope',
          placeholder:'Enter Here Result Analysis/ Data Interpretation...'
        },
      ]
    },
    {
      title: "Bibliography",
      caption: "",
      image: "",
      video: "",
      form:[
        {
          label:'Expected Result from the Research',
          placeholder:'Enter Here Expected Result from the Research...'
        },
      ]
    },
    {
      title: "Annexure",
      caption: "",
      image: "",
      video: "",
      form:[
        {
          label:'Bibliography',
          placeholder:'Enter Here Bibliography...'
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
