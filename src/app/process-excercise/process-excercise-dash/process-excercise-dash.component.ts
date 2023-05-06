import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExcerciseService } from 'src/app/services/excercise.service';

@Component({
  selector: 'app-process-excercise-dash',
  templateUrl: './process-excercise-dash.component.html',
  styleUrls: ['./process-excercise-dash.component.scss']
})
export class ProcessExcerciseDashComponent implements OnInit {

  title = 'Research Course Work - Stage 1';
  previewTitle='';
  index = 0;
  prevIndex:any;
  literatureReviewList: any;
  coverPageList:any;
  message: String = '';
  coverPageDialog: boolean = false;
  introductionDialog: boolean = false;
  literatureReviewDialog: boolean = false;
  literatureReviewEdit: boolean = false;
  fileData: any;
  coverPageForm!: FormGroup;
  introductionForm!: FormGroup;
  literatureReviewForm!: FormGroup;
  excerciseStage = [
    {
      title: "Level I",
      caption: "",
      image: "assets/img/vidyapun-cube.webp",
      video: "",
      topics: [
        {
          title: "Course Work",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Research Area of Interest",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Review Literature",
          caption: "",
          image: "",
          video: "",
        },

        {
          title: "Research Repository",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Synosis Framework",
          caption: "",
          image: "",
          video: "",
        },

      ]
    },
    {
      title: "Level II",
      caption: "",
      image: "assets/img/vidyapun-layer2.png",
      video: "",
      topics: [

        {
          title: "Approved Title",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Literature Review",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Research Gap & Objectives",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Research Methdology Survey",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Research Methdology & Material",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Data Collection/ Experimentation Method",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Sampling / Material Method",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Tools/ Setup",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Experimentation Method",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Implementation Method",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Statistical Tech / Calculation Set up / Corelation",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Sample Calculation",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Validation Method",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Result Analysis/ Data Interpretation",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Expected Result from the Research",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Bibliography",
          caption: "",
          image: "",
          video: "",
        }
      ]
    },
    {
      title: "Level III",
      caption: "",
      image: "assets/img/vidyapun-layer.webp",
      video: "",
      topics: [
        {
          title: "Coverpage",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Front Page",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Certificates",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Acknowledgement",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Abstract",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "List of Contents",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "List of Figures",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "List of Tables",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Abbreviation & Symbols",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Introduction",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Literature Review",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Research Methodology",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Result Analysis & Discussion",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Conclusion",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Bibliography",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Annexure",
          caption: "",
          image: "",
          video: "",
        }
      ]
    },
    {
      title: "Level IV",
      caption: "",
      image: "assets/img/vidyapun-layer4.webp",
      video: "",
      topics: [
        {
          title: "Pre-Submission",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Mock Vi-va",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Review Assesment",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Corrected Thesis",
          caption: "",
          image: "",
          video: "",
        },
        {
          title: "Mock Defence Vi-va",
          caption: "",
          image: "",
          video: "",
        }
      ]
    }
  ];
  levelOne = {
    title: "Research Course Work",
    caption: "",
    image: "assets/img/vidyapun-layer2.png",
    video: "",
    topics: [

      {
        title: "Course Work",
        caption: "",
        image: "",
        video: "",
        btnID: "title",
        updated: false,
        addBtn: false,
        form: [
          {
            id: 'coverPage',
            label: 'Course Work Practice Subjective',
            placeholder: '',
            route: '',
            btn: false,
          },
          {
            id: 'coverPage',
            label: 'Course Work Practice MCQ',
            placeholder: '',
            route: '/user-dash/mcq/home',
            btn: false,
          },


        ]
      },

      {
        title: "Review Literature",
        caption: "",
        image: "",
        video: "",
        btnID: "review-literature",
        updated: false,
        addBtn: false,
        form: [
          {
            id: 'coverPage',
            label: 'Cover Page',
            placeholder: 'Enter here Title...',
            route: '',
            btn: true,
            subForm: [
              {
                label: 'Full Name',
              },
              {
                label: 'Enrollment No.',
              },
              {
                label: 'Logo of University',
              },
              {
                label: 'Name of University'
              },
              {
                label: "Address of University"
              },
              {
                label: "Month of Exam"
              },
              {
                label: "Year of Exam"
              },
              {
                label: "Title Of Literature Review"
              },
              {
                label: "Subject"
              },

              {
                label: "Name of faculty"
              }

            ],
          },
          {
            id: 'introduction',
            label: 'Introduction',
            placeholder: 'Enter here Title...',
            route: '',
            btn: true,
            subForm: [
              {
                label: 'Summary of Research Area(75-150 words)',
              },
              {
                label: 'Why this area is important for research?(75-150 words)',
              },
              {
                label: 'What is the Scope of research in this area?(75-150 words)',
              },

            ],
          },
          {
            id: 'literatureReview',
            label: 'Literature List & Review',
            placeholder: 'Enter here Title...',
            route: '',
            btn: true,
            subForm: [
              {
                label: 'Name of Author',
              },
              {
                label: 'Title',
              },
              {
                label: 'Year of Publication',
              },
              {
                label: "Type"
              },
              {
                label: "Journal/ Book/Conf. Name"
              }
              ,
              {
                label: "ISSN/ISBN"
              }
              ,
              {
                label: "Vol"
              }
              ,
              {
                label: "Page No."
              },
              {
                label: "What the article is about?"
              },
              {
                label: "Name the Research Area/Idea"
              },

              {
                label: "Methodology Used for Research"
              }
              ,
              {
                label: "What are the major findings?"
              }
              ,
              {
                label: "How/ Why this work is important for you? (Relevancy)"
              }



            ],
          },



        ]
      },
      {

        title: "Research Repository",
        caption: "",
        image: "",
        video: "",
        btnID: "review-literature",
        updated: false,
        addBtn: false,
        form: [
          {
            id: 'coverPage',
            label: 'Research Articles & Patent Search engines',
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
          {
            id: 'coverPage',
            label: "Ph.D and Master's Theses Repositories",
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
          {
            id: 'coverPage',
            label: 'Physics',
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
          {
            id: 'coverPage',
            label: 'Chemistry',
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
          {
            id: 'coverPage',
            label: 'Mathmatics',
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
          {
            id: 'coverPage',
            label: 'Bio Science',
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
          {
            id: 'coverPage',
            label: 'Arts & Humanities',
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
          {
            id: 'coverPage',
            label: 'Social Sciences',
            placeholder: 'Enter here Title...',
            route: '/user-dash/process-excercise/excercise/Research Repository',
            btn: false,
          },
        ]
      },
      {
        id: 'coverPage',
        title: "Synopsis Framework",
        caption: "",
        image: "",
        video: "",
        btnID: "review-literature",
        updated: false,
        addBtn: false,
        form: [
          {
            id: 'coverPage',
            label: 'Engineering',
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
          {
            id: 'coverPage',
            label: "Management",
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
          {
            id: 'coverPage',
            label: 'Education',
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
          {
            id: 'coverPage',
            label: 'Commerce',
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
          {
            id: 'coverPage',
            label: 'Law',
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
          {
            id: 'coverPage',
            label: 'Physics',
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
          {
            id: 'coverPage',
            label: 'Chemistry',
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
          {
            id: 'coverPage',
            label: 'History',
            placeholder: 'Enter here Title...',
            btn: false,
            route: '/user-dash/process-excercise/excercise/Synosis Framework',
          },
        ]
      },
    ]
  };

  constructor(
    private service: ExcerciseService
  ) { }

  ngOnInit(): void {
    this.getLiteratureReviewData();
    this.getCoverPageData();
    this.setCoverPageForm();
    this.setIntroductionForm();
    this.setLiteratureReviewForm();

  }

  // INITIALIZE COVER PAGE FORM


  setCoverPageForm() {

    this.coverPageForm = new FormGroup({
      fullName: new FormControl(''),
      enrollment: new FormControl(''),
      university: new FormControl(''),
      logo: new FormControl(''),
      address: new FormControl(''),
      date: new FormControl(''),
      year: new FormControl(''),
      title: new FormControl(''),
      subject: new FormControl(''),
      faculty: new FormControl(''),
    })


  }
  setIntroductionForm() {
    this.introductionForm = new FormGroup({
      summary: new FormControl(''),
      importance: new FormControl(''),
      scope: new FormControl(''),
    })
  }



  setLiteratureReviewForm() {
    this.literatureReviewForm = new FormGroup({
      nameAuthor: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl('Year'),
      type: new FormControl('Select'),
      journal: new FormControl(''),
      issn: new FormControl(''),
      vol: new FormControl(''),
      pageNo: new FormControl(''),
    

      ans0: new FormControl(''),
      ans1: new FormControl(''),
      ans2: new FormControl(''),
      ans3: new FormControl(''),
      ans4: new FormControl(''),

    })
  }
  getBtnID(id: any) {
    console.log(id)
  }
  getID(e: any) {
    console.log(e);

    this.coverPageDialog = false;
    this.introductionDialog = false;
    this.literatureReviewDialog = false;
    if (e == 'coverPage') {
      this.coverPageDialog = true;
    } else if (e == 'introduction') {
      this.introductionDialog = true;
    } else if (e == 'literatureReview') {
      this.literatureReviewDialog = true;
    }
  }

  // UPLOAD FILE

  uploadFile(e: any) {

    console.log(e.target.files[0]);

    this.fileData = e.target.files[0];
    // this.fileData.fullName="Aman";

    console.log(this.fileData);
  }


  submit(e: any) {
    console.log(e);
    if (e == 'coverPage') {
      let formdata: any = new FormData();
      formdata.set("file", this.fileData);

      console.log(this.coverPageForm.value)
      console.log(formdata);
      console.log(this.fileData);

      this.service.putExcerciseLeveOneService(this.coverPageForm.value, 'coverPage').subscribe((result: any) => {
        console.log(result);
        if (result.status == 'success') {

          this.service.putExcerciseLeveOneService(formdata, 'logo').subscribe((data: any) => {
            console.log("uploaded");
            this.message = data.msg;
            this.coverPageForm.reset();
          })
        } else {
          alert('Error..!')
        }
      })
    } else if (e == 'literatureReview') {
      console.log(this.literatureReviewForm.value);
      this.service.putExcerciseLeveOneService(this.literatureReviewForm.value, 'literatureReview').subscribe((result: any) => {
        this.message = result.msg;
        this.coverPageForm.reset();
        this.getLiteratureReviewData();
      })

    } else if (e == 'introduction') {
      this.introductionForm.value
      console.log(this.introductionForm.value);
      this.service.putExcerciseLeveOneService(this.introductionForm.value, 'introduction').subscribe((result: any) => {
        this.message = result.msg;
        this.coverPageForm.reset();
      })
    }

  }


  // get user literature review data

  getLiteratureReviewData() {
    this.service.getExcerciseLeveOneService('literatureReview').subscribe((result: any) => {
      console.log(result)
      this.literatureReviewList = result.result[0].excercise.levelOne.listReview

      console.log(this.literatureReviewList)
    })
  }


  getCoverPageData() {
    this.service.getExcerciseLeveOneService('coverPage').subscribe((result: any) => {
      console.log(result)
      this.coverPageList = result.result[0].excercise.levelOne.coverPage

      console.log(this.coverPageList)
    })
  }

  editData: any;
  editLiterature(id: any): void {

    this.getLiteratureReviewData();
    // console.log(id)
    let data = this.literatureReviewList.find((item: { _id: any; }) => item._id == id)
    // console.log(data);
    this.editData = data;

    this.literatureReviewForm = new FormGroup({
      id:new FormControl(this.editData._id),
      nameAuthor: new FormControl(data?.ath),
      title: new FormControl(data?.titles),
      year: new FormControl(data?.year),
      type: new FormControl(data.types),
      journal: new FormControl(data?.journal),
      issn: new FormControl(data?.issn),
      vol: new FormControl(data?.vol),
      pageNo: new FormControl(data?.pageNo),
   
      ans0: new FormControl(data?.ques0?.ans),
      ans1: new FormControl(data?.ques1?.ans),
      ans2: new FormControl(data?.ques2?.ans),
      ans3: new FormControl(data?.ques3?.ans),
      ans4: new FormControl(data?.ques4?.ans),

    })
    this.literatureReviewEdit = true;
    this.index=0;
    this.progress = 0;
    this.progressStr = '0%';
  }
  litReviewBack() {
    this.literatureReviewEdit = false;
  }
  progress = 0;
  progressStr = '0%';
  next() {

    if (this.index < 5) {

      this.index = this.index + 1;

      this.progress = this.index * 20;

      this.progressStr = JSON.stringify(this.progress) + "%";
      console.log(this.progress);


      this.service.putExcerciseLeveOneService(this.literatureReviewForm.value, 'literatureReviewEdit').subscribe((result: any) => {
        this.message = result.msg;
        this.coverPageForm.reset();
        this.getLiteratureReviewData();
      })


    }

    console.log(this.literatureReviewForm.value);

    if(this.index==5){
      this.literatureReviewEdit = false;      
    }

  }

  previous() {
    if (this.index > 0) {

      this.index = this.index - 1;
      this.progress = this.index * 25;
      this.progressStr = JSON.stringify(this.progress) + "%";
      // console.log(this.progress);

    }


  }

  preview(i:any, title:string){
    console.log(i)
    console.log(title)
    this.prevIndex=i;
    this.previewTitle=title;
  }
}
