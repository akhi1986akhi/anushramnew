import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-progress-mapping-dash',
  templateUrl: './progress-mapping-dash.component.html',
  styleUrls: ['./progress-mapping-dash.component.scss']
})
export class ProgressMappingDashComponent implements OnInit {
  progressMapForm!: FormGroup;
  userRec:any | undefined;
  abcForm!: FormGroup;
  uploadList: any = [];
  stagePlanner:any = [
    {
      stageName: "Stage I",
      stages: [
        {
          name: "Ph.D Admission"
        },
        {
          name: "Entrance Test"
        },
        {
          name: "Personal Interview"
        },
        {
          name: "Merit List"
        },
        {
          name: "Admission Confirmation Letter"
        }
      ]
    },
    {
      stageName: "Stage II",
      stages: [
        {

          name: "Course Work Registration"

        },
        {

          name: "Optional Subject Selection"

        },
        {

          name: "Course work examination"

        },
        {

          name: "Course work result"

        }
      ]
    },
    {
      stageName: "Stage III",
      stages: [
        {

          name: "Course Work Result"

        },
        {

          name: "First Six Monthly Report"

        },
        {

          name: "Supervisor Allotment"

        },
        {

          name: "Supervisor Name"

        },
        {

          name: "Co-Supervisor Name"

        },
        {

          name: "Area research Problem Identification"

        },
        {

          name: "Literature Review/ Survey"

        },
        {

          name: "Research Proposal Writing"

        },
        {

          name: "Research Title for Proposal/ Synopsis"

        },
        {

          name: "RDC conduction/ Defence"

        },
        {

          name: "Title Approval Cum RDC Letter"

        }
      ]
    },
    {
      stageName: "Stage IV",
      stages: [
        {

          name: "Title Approval cum RDC Letter"

        },
        {

          name: "Methodology Development & Implemention"

        },
        {

          name: "Review Paper Publication"

        },
        {

          name: "Conference Publication"

        },
        {

          name: "Conference Publication"

        },
        {

          name: "Experimention Setup/ Development"

        },
        {

          name: "Data Management"

        },
        {

          name: "Data Analysis"

        },
        {

          name: "Research Paper Publication"

        },
        {

          name: "Review Paper Publication"

        },
        {

          name: "Conference Publication"

        },
        {

          name: "Result Analysis & discussion"

        },
      ]
    },
    {
      stageName: "Stage V",
      stages: [
        {

          name: "Drafting Chapters for thesis"

        },
        {

          name: "Thesis Chaptrization Draft - 1"

        },
        {

          name: "Thesis Chaptrization Draft - 2"

        },
        {

          name: "Thesis Chaptrization Draft - 3"

        },
        {

          name: "Departmental Review Committe Metting"

        },
        {

          name: "Pre Submission Process and spiral Binding"

        },
        {

          name: "Mock Presention"

        },
        {

          name: "Prepration for pre-viva"

        },
        {

          name: "Pre thesis viva"

        },
        {

          name: "Prepration for pre-viva"

        },
        {

          name: "Correction in thesis"

        },
        {

          name: "Prepration for pre-viva"

        },
        {

          name: "Mock Interview"

        },
        {

          name: "Final Thesis drafting"

        }
      ]
    },
    {
      stageName: "Stage VI",
      stages: [
        {

          name: "Thesis Submission"

        },
        {

          name: "Review of thesis by external examinar"

        },
        {

          name: "Expert comment response"

        },
        {

          name: "Probable viva questions"

        },
        {

          name: "Final Viva Preprations"

        },
        {

          name: "Mock Expert Pannel"

        },
        {

          name: "Final thesis defence viva voice"

        },
        {

          name: "Notification of Degree"

        },
        {

          name: "Award of Ph.D Degree"

        }
      ]
    }
  ];
  dialogTitle = '';
  stage = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here summary...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],

  };
  constructor(
    private service: UserDataService
  ) { }

  ngOnInit(): void {
    this. getData();
    this.setProgressMapForm();
  }

  setProgressMapForm() {
    this.progressMapForm = new FormGroup({
      htmlContent: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      status: new FormControl(''),
      result: new FormControl('')
    })
  }

  openDiaolog(e: any, s: any) {

    this.dialogTitle = e;
    this.stage = s;
 
  }


  uploadFile(event: any) {
    console.log(event)

    console.log(event.target.files[0])
    console.log(event.target.files.length)
    console.log(event.target.files[1])
    for (let i = 0; i < event.target.files.length; i++) {
      this.uploadList.push(event.target.files[i])
    }

    console.log(this.uploadList);
    console.log(this.uploadList[0].name);
    // let ext = event.target.files[0].type.split('/');
    // if (ext[0] == 'image') {

    //   if (event.target.files[0].size > 500000) {
    //     this.fileForm.reset();
    //     return alert("maximum file size allowed 50kb.")
    //   }

    //   this.file = event.target.files[0];

    //   let formdata = new FormData();
    //   formdata.set("file", this.file);

    //   this.formdataArray.push(formdata);

    //   if (event.target.files) {
    //     let reader = new FileReader();
    //     reader.readAsDataURL(event.target.files[0]);
    //     reader.onload = (e: any) => {
    //       this.thumbnail = e.target.result;
    //       this.thumbnailArray.push(e.target.result);
    //       this.fileForm.reset();
    //     }
    //   }
    // } else {
    //   alert("Alert !  Upload image file");
    //   this.fileForm.reset();
    // }
  }

  submitDialogForm() {
    console.log(this.progressMapForm.value);
    console.log(this.dialogTitle);
    console.log(this.stage)
    this.progressMapForm.value.title = this.dialogTitle;
    this.progressMapForm.value.stage = this.stage;

    console.log(this.progressMapForm.value);

    this.service.updateUserProgressMapService(this.progressMapForm.value, 'progressmap').subscribe((result: any) => {
      console.log(result);
      console.log(result.result);
      if (result.status == 'success') {



        for(let i=0;i< this.uploadList.length;i++){
          console.log(result.result);
          let formdata = new FormData();
          formdata.set("file", this.uploadList[i]);
          console.log(formdata)

          this.service.updateUserProgressMapAttService(formdata,'progressmap-attachment',result.result._id).subscribe((data)=>{
            console.log(data);

            this.getData();
          })
        }

    

        alert(result.msg)
      } else {
        alert('Error')
      }
    })
  }


 getData(){
    this.service.getUserProgressMapService().subscribe((result:any)=>{
      console.log(result);
      this.userRec=result.progressMapping;

      


      if(this.userRec != undefined){

        for(let i=0; i< this.stagePlanner[0].stages.length; i++){
          console.log(this.stagePlanner[0].stages[i].name)
          let data= this.userRec.filter((item: { title: string; })=> item.title ==this.stagePlanner[0].stages[i].name);
   
          console.log("filter data",data[data.length - 1]);
          console.log("filter data length",data.length);
   
          if(data.length >0){
           this.stagePlanner[0].stages[i].status =data[data.length - 1].status
           console.log(this.stagePlanner[0].stages[0])
           
          }
        }



      }

      console.log(this.userRec)
      console.log(this.stagePlanner[0].stages)

      // for(let i=0; i< this.stagePlanner[0].stages.length;i++){
      //   this.stagePlanner[0].stages[i].name
      //   console.log(this.stagePlanner[0].stages[i].name)
      //   let data= result.filter((item: { title: string; }) => item.title=='Ph.D Admission');

      //   console.log(data[0])
      // }
    })
  }


}
