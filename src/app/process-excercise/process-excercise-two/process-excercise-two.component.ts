import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcerciseService } from 'src/app/services/excercise.service';
import { ProcessExService } from 'src/app/services/process-ex.service';

@Component({
  selector: 'app-process-excercise-two',
  templateUrl: './process-excercise-two.component.html',
  styleUrls: ['./process-excercise-two.component.scss']
})
export class ProcessExcerciseTwoComponent implements OnInit {
  title = 'Research Launcher - Stage 2';
  File: any;
  spinner:boolean=true;
  branchBachelorDialog:boolean=false;
  branchMasterDialog:boolean=false;
  fauriteSubjectDialog:boolean=false;
  subareaTopicDialog:boolean=false;
  whyYouFeelDialog:boolean=false;

  typeOfResearchesDialog:boolean=false;
  listKeyResearchesDialog:boolean=false;
  typeOfResourcesDialog:boolean=false;

  getBenefitedDialog:boolean=false;
  novelConceptDialog:boolean=false;
  readSomewhereDialog:boolean=false;
  perspectiveContextDialog:boolean=false;
  discussHistoryDialog:boolean=false;
  significancePlayersDialog:boolean=false;
  establishThroughResearchDialog:boolean=false;
  needOfResearchDialog:boolean=false;
  explanationDialog:boolean=false;
  currentStatusDialog:boolean=false;
  problemStatusDialog:boolean=false;
  stateofresearchDialog:boolean=false;
  includeTechnologiesDialog:boolean=false;
  importanceAreaIntrestDialog:boolean=false;
  importanceFutureDevelopmentDialog:boolean=false;
  challangesObstaclesDialog:boolean=false;
  challangesPoliticalDialog:boolean=false;
  personalPerspectiveAreaDialog:boolean=false;
  personalPerspectiveInterestDialog:boolean=false;
  personalPerspectiveContributeDialog:boolean=false;
  futureAreaDialog:boolean=false;
  futurePotentialsDialog:boolean=false;
  futureResearchDialog:boolean=false;

  researchAreaofInterestDialog: boolean = false;
  titleDialog: boolean = false;
  listArticlesDialog: boolean = false;

  literatureviewDialog: boolean = false;

  surveyDetailsDialog: boolean = false;

  surveyQuestionDialog: boolean = false;

  surveyAnalysisMethodDialog: boolean = false;
  surveyAnalysisDescriptionDialog: boolean = false;
  surveyValidationDescriptionDialog: boolean = false;
  designResearchDialog: boolean = false;
  toolsTeechniquesDialog: boolean = false;
  toolsDetailsDialog: boolean = false;
  typeofDataDialog: boolean = false;
  sizeofDataDialog: boolean = false;
  dataAnalysisDialog: boolean = false;
  methodDialog: boolean = false;
  typeofSourceDialog: boolean = false;
  dataofTablesDialog: boolean = false;
  howToUseDataDialog: boolean = false;
  objectiveofsurveyDialog: boolean = false;
  keyInformationDialog: boolean = false;
  universeDialog: boolean = false;
  searchDialog: boolean = false;
  sampleDialog: boolean = false;



  openEnded: boolean = false;
  closedEnded: boolean = false;



  message: string = '';
  levelTwoUserData = [];
  topics = [

    {
      id: 'approvedTitle',
      title: "Approved Title",
      caption: "",
      image: "",
      video: "",
      btnID: "title",
      updated: false,
      form: [
        {
          label: 'Title',
          placeholder: 'Enter here your approved title...',
          caption: 'Micro Cloud Computing'
        }

      ]
    },
    {
      title: "Literature Review",
      caption: "",
      image: "",
      video: "",
      btnID: "literature-review",
      form: [
        {
          label: 'Article Title',
          placeholder: 'Enter here Article Title...'
        },
        {
          label: 'Journal Name',
          placeholder: 'Enter here Journal Name...'
        },
        {
          label: 'author Name',
          placeholder: 'Enter here Authour Name...'
        },
        {
          label: 'Year of Publication',
          placeholder: 'Enter here Publcation Year...'
        },
        {
          label: 'IISN',
          placeholder: 'Enter here IISN...'
        },
        {
          label: 'Write Review and Relevancy of your Research area from the Literature Review ( Max. 75 - 100 Words)',
          placeholder: 'Enter here Review and Relevancy of your Research area...'
        }

      ]
    },
    {
      title: "Research Gap & Objectives",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Research Gap',
          placeholder: 'Enter here Research Gap...'
        },
        {
          label: 'Research Objective',
          placeholder: 'Enter here Research Objective...'
        },


      ]
    },
    {
      title: "Research Methdology",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Survey I',
          placeholder: 'Enter here Reserch survey...'
        },
        {
          label: 'Survey II',
          placeholder: 'Enter here Reserch survey...'
        },
        {
          label: 'Survey III',
          placeholder: 'Enter here Reserch survey...'
        },
      ]
    },
    {
      title: "Research Methdology & Material",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Description',
          placeholder: 'Enter here description...'
        },
        {
          label: 'Method',
          placeholder: 'Enter here research method...'
        },
        {
          label: 'Techniques',
          placeholder: 'Enter here techniques...'
        },
        {
          label: 'Site of Implementation/ Setup',
          placeholder: 'Enter here site of implementation/ setup...'
        },
        {
          label: 'Subject/ Site/ Material Specification',
          placeholder: 'Enter here subject/ site/ material specification...'
        },
        {
          label: 'Instrumention/ Servey/ Study Tools',
          placeholder: 'Enter here instrumention/ servey/ study tools...'
        },
        {
          label: 'Formulation/ Correlation/ Statistical Analysis Tool',
          placeholder: 'Enter here formulation/ correlation/ statistical analysis tool...'
        },
        {
          label: 'Experimental/ Setup/ Demographic/ Explanation',
          placeholder: 'Enter here experimental/ setup/ demographic/ explanation...'
        },
        {
          label: 'Data Generation & Analysis',
          placeholder: 'Enter here data generation & analysis...'
        },
        {
          label: 'Validation Techniques',
          placeholder: 'Enter here validation techniques...'
        },
      ]
    },
    {
      title: "Primary & Secondary Data",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Primary Data Source',
          placeholder: 'Enter here primary data...',
          subForm: [
            {
              label: 'Survey Details',
            },

          ]
        },
        {
          label: 'Secondary Data Source',
          placeholder: 'Enter here secondary data...'
        }
      ]
    },
    {
      title: "Data Collection/ Experimentation Method",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Data Collection',
          placeholder: 'Enter here Data Collection...'
        },
        {
          label: 'Experimention Method',
          placeholder: 'Enter here Experimention Method...'
        },

      ]

    },
    {
      title: "Sampling / Material Method",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Sampling / Material Method',
          placeholder: 'Enter Here Sampling / Material Method...'
        },


      ]
    },
    {
      title: "Tools/ Setup",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Tools Setup',
          placeholder: 'Enter Here Tool Setup...'
        },
      ]
    },
    {
      title: "Experimentation Method",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Experimentation Method',
          placeholder: 'Enter Here Experimentation Method...'
        },
      ]
    },
    {
      title: "Implementation Method",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Implementation Method',
          placeholder: 'Enter Here Implementation Method...'
        },
      ]
    },
    {
      title: "Statistical Tech / Calculation Set up / Corelation",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Statistical Tech / Calculation Set up / Corelation',
          placeholder: 'Enter Here Statistical Tech / Calculation Set up / Corelation...'
        },
      ]
    },
    {
      title: "Sample Calculation",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Sample Calculation',
          placeholder: 'Enter Here Sample Calculation...'
        },
      ]
    },
    {
      title: "Validation Method",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Validation Method',
          placeholder: 'Enter Here Validation Method...'
        },
      ]
    },
    {
      title: "Result Analysis/ Data Interpretation",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Result Analysis/ Data Interpretation',
          placeholder: 'Enter Here Result Analysis/ Data Interpretation...'
        },
      ]
    },
    {
      title: "Expected Result from the Research",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Expected Result from the Research',
          placeholder: 'Enter Here Expected Result from the Research...'
        },
      ]
    },
    {
      title: "Bibliography",
      caption: "",
      image: "",
      video: "",
      form: [
        {
          label: 'Bibliography',
          placeholder: 'Enter Here Bibliography...'
        },
      ]
    }
  ]

  levelTwo = {
    title: "Level II",
    caption: "",
    image: "assets/img/vidyapun-layer2.png",
    video: "",

    topics: [
      {
        id: 'areaInterestTitle',
        title: "AREA OF INTEREST & TITLE OF RESEARCH",
        caption: "",
        image: "",
        video: "6433f0be95dcc268076478de",
        btnID: "researchAreaofInterest",
        updated: false,
        addBtn: false,
        form: [
          {
            label: 'What is your subject or branch as per your academic record?',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: 'Subject/ Branch in Bachelor Degree',
                btnID: 'branchBachelor',
                btn: true,
              },
              {
                label: "Subject/ Branch in Master's Degree",
                btnID: 'branchMaster',
                btn: true,
              },
            ]
          },
          {
            label: 'Which subject you understand most and find most suitable for your research?',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: 'Favourite area in Your Subject',
                btnID: 'fauriteSubject',
                btn: true,
              },
              {
                label: "Sub Area or topic",
                btnID: 'subareaTopic',
                btn: true,
              },
              {
                label: "Why you feel it is favourite to you?",
                btnID: 'whyYouFeel',
                btn: true,
              },
            ]
          },
          {
            label: 'What is your preferred area in which you feel more research may be carried out and you also have capabilities to contribute significantly in the field through your research?',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: 'Type of research that may be carry out in your field of interest',
                btnID: 'typeOfResearches',
                btn: true,
              },
              {
                label: "List key researches in the field with proper citation ",
                btnID: 'listKeyResearches',
                btn: true,
              },
              {
                label: "Type of resources that is available with you for the research",
                btnID: 'typeOfResources',
                btn: true,
              },
            ]
          },
          {
            label: 'What will be the possible advantages & significance of your research?',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: 'Who will be get benefited from your research?',
                btnID: 'getBenefited',
                btn: true,
              },
              {
                label: "How your research brings a novel concept?",
                btnID: 'novelConcept',
                btn: true,
              },
            
            ]
          },
          {
            label: 'Start by introducing your area of interest ',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "What drew you to it. This could be a personal experience, a hobby, or something you've studied in school or in college or you have read somewhere",
                btnID: 'readSomewhere',
                btn: true,
              },
           
            
            ]
          },
          {
            label: 'Background',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Provide some context, perspective for your area of interest.",
                btnID: 'perspectiveContext',
                btn: true,
              },
              {
                label: "Discuss its history",
                btnID: 'discussHistory',
                btn: true,
              },
              {
                label: "Significance, and any major players or theories involved. ",
                btnID: 'significancePlayers',
                btn: true,
              },
            
            ]
          },
          {
            label: 'Read: Literature Survey & Review',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Source Identification (Articles, Conference Proceeding,Books, Authorized Documentations, Internet Sources, News Agencies Reports)",
                btnID: 'listArticles',
                btn: false,
              },
              {
                label: "Key research work (Prepare details notes on each source)",
                btnID: 'listArticles',
                btn: false,
              },
              {
                label: "Key Gaps (List all Gaps identified through literature Survey)",
                btnID: 'listArticles',
                btn: false,
              },
              {
                label: "Objective of the research on the basis of literature survey & Review",
                btnID: 'listArticles',
                btn: false,
              },
              {
                label: "Divide survey in multiple categories as under",
                btnID: 'listArticles',
                btn: false,
              },
              {
                label: ". Basic Informative Literature that helps in understanding of the title, most of the time it is old research and common establish concepts that already adopted in text and reference books.",
                btnID: 'listArticles',
                btn: false,
              },
              {
                label: "Literature Common Methodology & Method or research design it is moderate age literature basically from journal articles and resent thesis submitted at various universities around the globe. It help in identifying the optimized research design for the work. It also helps in secondary data source identification.",
                btnID: 'listArticles',
                btn: false,
              },
              {
                label: "Current research, this includes recently published data and conference data and latest government and authorized agencies reports.",
                btnID: 'listArticles',
                btn: false,
              },
            ]
          },
          {
            label: 'Develop a research question',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Explain what exactly you want establish through research.",
                btnID: 'establishThroughResearch',
                btn: true,
              },
              {
                label: "Pin point explanation about need of research",
                btnID: 'needOfResearch',
                btn: true,
              },
              {
                label: " Key factors and their explanation that to be analysed through the research",
                btnID: 'explanation',
                btn: true,
              },
              {
                label: "What is the current status of research in the area and how it is differ from your research? ",
                btnID: 'currentStatus',
                btn: true,
              },
              {
                label: "Conduct full scale literature Survey & review to identified the problem status, and probable solution ",
                btnID: 'problemStatus',
                btn: true,
              },
            
            ]
          },
          {
            label: 'Current State',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Describe the current state of research, innovation, or developments in your area of interest.",
                btnID: 'stateofresearch',
                btn: true,
              },
              {
                label: "This could include new technologies, emerging trends, or relevant news articles.",
                btnID: 'includeTechnologies',
                btn: true,
              },
          
            
            ]
          },
          {
            label: 'Importance',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Explain why your area of interest is important. ",
                btnID: 'importanceAreaIntrest',
                btn: true,
              },
              {
                label: "Its potential for future developments, or its relevance to current issues.",
                btnID: 'importanceFutureDevelopment',
                btn: true,
              },
          
            
            ]
          },
          {
            label: 'Challenges',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Discuss the challenges or obstacles facing your area of interest. ",
                btnID: 'challangesObstacles',
                btn: true,
              },
              {
                label: "This could include political, economic, or technological challenges, as well as social or ethical concerns.",
                btnID: 'challangesPolitical',
                btn: true,
              },
          
            
            ]
          },
          {
            label: 'Personal Perspective',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Share your personal perspective on your area of interest.",
                btnID: 'personalPerspectiveArea',
                btn: true,
              },
              {
                label: "What interests you about it? ",
                btnID: 'personalPerspectiveInterest',
                btn: true,
              },
              {
                label: "What do you hope to contribute to it in the future?",
                btnID: 'personalPerspectiveContribute',
                btn: true,
              },
          
            
            ]
          },
          {
            label: 'Future directions',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Explore the future of your area of interest.",
                btnID: 'futureArea',
                btn: true,
              },
              {
                label: "What potential developments or breakthroughs do you see on the horizon? ",
                btnID: 'futurePotentials',
                btn: true,
              },
              {
                label: "What areas of research or innovation are particularly promising?",
                btnID: 'futureResearch',
                btn: true,
              },
          
            
            ]
          },
          {
            label: 'Conclusion',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Summarize your main points and leave with a final thought or reflection on your area of interest.",
                btnID: 'listArticles',
                btn: true,
              },
          
          
            
            ]
          },
          {
            label: 'Develop Your Title with following Details',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Key Problem",
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: "Methodology to be Used",
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: "Expected Result (Try to keep open Ended)",
                btnID: 'listArticles',
                btn: true,
              },
            
            ]
          },
          {
            label: 'Proposed Research Title',
            placeholder: '',
            link: '',
            subForm: [
              {
                label: "Proposed Research Title",
                btnID: 'listArticles',
                btn: true,
              },
           
            
            ]
          },
        ]
      },
      {
        id: 'areaInterest',
        title: "Research Area of Interest in Subject",
        caption: "",
        image: "",
        video: "6433f0be95dcc268076478de",
        btnID: "researchAreaofInterest",
        updated: false,
        addBtn: true,
        form: [
          {
            label: 'Area of Interest in Subject',
            placeholder: 'Enter here Title...',
            link: '',
            subForm: []
          },
          {
            label: 'Scope of research in the area',
            placeholder: 'Enter here Title...',
            link: '',
            subForm: []
          },
          {
            label: 'Significance of the research.',
            placeholder: 'Enter here Title...',
            link: '',
            subForm: []
          },
        ]
      },
      {
        id: "literatureReview",
        title: "Literature Review",
        caption: "",
        image: "",
        video: "6434225d95dcc26807647944",
        btnID: "literature-review",
        updated: false,
        addBtn: true,
        form: [
          {
            label: 'Undersatnd Literature Review',
            placeholder: 'Enter here Article Title...',
            link: '',
            subForm: [
              {
                label: 'What is Literature Review?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'What types of literature did you consider in your literature review process, and why did you choose those specific types?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'How did you identify the relevant sources for your literature review, and what criteria did you use to select them?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'How did you synthesize and analyze the literature you reviewed, and what themes or patterns did you identify?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'In your research, which citation style did you adopt, and why did you choose that particular style?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'Can you explain how you ensured the credibility and reliability of the sources you included in your literature review?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'How did the different types of literature you reviewed contribute to your understanding of the research topic, and how did they shape your research questions or hypothesis?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'Can you elaborate on how you synthesized the literature in your review, and how this synthesis helped you identify gaps and develop new insights?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'Please describe the search strategy you employed for identifying relevant sources in your literature review, including the databases and search terms you used.',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'What criteria did you establish for selecting sources to include in your literature review, and how did you apply these criteria to ensure the relevance and quality of the reviewed literature?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'How did you adapt your search strategy and selection criteria over time to refine the scope of your literature review and improve its effectiveness?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'Can you discuss the differences between the APA, MLA, and Chicago citation styles, and explain why one might choose one style over another?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'What are some best practices for ensuring consistency and accuracy in reference writing and citation formatting?',
                btnID: 'listArticles',
                btn: true,
              },
              {
                label: 'How do you cite different types of literature, such as books, journal articles, and web resources, using the APA citation style?',
                btnID: 'listArticles',
                btn: true,
              },
           
            ]
          },
          {
            label: 'Research Repository Source',
            placeholder: 'Enter here Article Title...',
            link: 'Research Repository',
            subForm: []
          },
          {
            label: 'Articles',
            placeholder: 'Enter here Article Title...',
            link: '',
            subForm: [
              {
                label: 'List of Articles for Review Literature',
                btnID: 'listArticles',
                btn: true,
              },
            ]
          },
          {
            label: 'Article Details',
            placeholder: 'Enter here Article Title...',
            link: '',
            subForm: []
          },

          {
            label: 'Write Review and Relevancy of your Research area from the Literature Review ( Max. 75 - 100 Words)',
            placeholder: 'Enter here Review and Relevancy of your Research area...',
            link: '',
            subForm: [
              {
                label: 'What type of Research presented in the article.',
                btnID: 'literature-review',
                btn: false,
              },
              {
                label: 'How many sources were cited in the article.',
                btnID: 'literature-review',
                btn: false,
              },
              {
                label: 'Explain the methodology use in the research.',
                btnID: 'literature-review',
                btn: false,
              },
              {
                label: 'Key finding presented in the article',
                btnID: 'literature-review',
                btn: false,
              },
              {
                label: 'Is data presented article is use full in yours research how?',
                btnID: 'literature-review',
                btn: false,
              },
            ]
          },
      

        ]
      },
      {
        id: 'approvedTitle',
        title: "Approved Title",
        caption: "",
        image: "",
        video: "6434235995dcc26807647959",
        btnID: "title",
        updated: false,
        addBtn: true,
        form: [
          {
            label: 'Title',
            placeholder: 'Enter here your approved title...',
            caption: 'Micro Cloud Computing',
            link: '',
            subForm: [

            ]
          }

        ]
      },

      {
        id: 'researchMethodology',
        title: "Research Methdology",
        caption: "",
        image: "",
        video: "6434245095dcc2680764796e",
        updated: false,
        addBtn: false,
        form: [
          {
            label: 'Method or Design of Research',
            placeholder: 'Enter here Reserch survey...',
            link: '',
            subForm: [
              {
                label: 'Method or Design of Research',
                btnID: 'designResearch',
                btn: true,
              },
            ]
          },
          {
            label: 'Tools & Techniques',
            placeholder: 'Enter here Reserch survey...',
            link: '',
            subForm: [
              {
                label: 'Tools & Techniques',
                btnID: 'toolsTeechniques',
                btn: true,
              },
            ]
          },
          {
            label: 'Tools Details Upload',
            placeholder: 'Enter here Reserch survey...',
            link: '',
            subForm: [
              {
                label: 'Tools Details Upload',
                btnID: 'toolsDetails',
                btn: true,
              },
            ]
          },
          {
            label: 'Survey Frame Work',
            placeholder: 'Enter here Reserch survey...',
            link: '',
            subForm: [
              {
                label: 'What is the objective of survey?',
                btnID: 'objectiveofsurvey',
                btn: true,
              },
              {
                label: 'What Key information Required to be collected through survey?',
                btnID: 'KeyInformation',
                btn: true,
              },
              {
                label: 'What is the universe?',
                btnID: 'universe',
                btn: true,
              },
              {
                label: 'How to search the response?',
                btnID: 'response',
                btn: true,
              },
              {
                label: 'Sample Size',
                btnID: 'sampleSize',
                btn: true,
              },
            ]
          },
        ]
      },

      {
        title: "Primary & Secondary Data",
        caption: "",
        link: '',
        image: "",
        video: "",
        form: [
          {
            label: 'Common Techniques For Data Handling',
            placeholder: 'Enter here secondary data...',
            link: '',
            subForm:[
              {
                label: 'Data cleaning: Identifying and correcting errors, inconsistencies, or inaccuracies in the data.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Data transformation: Converting data into different formats or units to facilitate analysis or comparison.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Data imputation: Estimating missing values in the dataset using various statistical methods.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Data normalization: Scaling the data to fit within a specific range or to ensure comparability across variables.',
                btnID: 'surveyDetails',
                btn: true,
              },
             
            ]
          },
          {
            label: 'Common Techniques For Data Arrangement',
            placeholder: 'Enter here secondary data...',
            link: '',
            subForm:[
              {
                label: 'Sorting: Organizing data in ascending or descending order based on a specific variable.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Ranking: Assigning a rank to each data point based on its relative position in the dataset.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Categorizing: Grouping data points into distinct categories or classes based on shared characteristics.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Aggregating: Combining data points to create summary statistics or measures for different groups or time periods.',
                btnID: 'surveyDetails',
                btn: true,
              },
             
            ]
          },
          {
            label: 'Common Measures of Central Tendency',
            placeholder: 'Enter here secondary data...',
            link: '',
            subForm:[
              {
                label: 'Mean: The average value of a dataset, calculated by summing all values and dividing by the number of data points.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Median: The middle value of a dataset when the data points are sorted in ascending or descending order.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Mode: The value that appears most frequently in a dataset.',
                btnID: 'surveyDetails',
                btn: true,
              },
           
             
            ]
          },
          {
            label: 'Common Measures of Dispersion',
            placeholder: 'Enter here secondary data...',
            link: '',
            subForm:[
              {
                label: 'Range: The difference between the maximum and minimum values in a dataset.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Interquartile Range (IQR): The difference between the first quartile (25th percentile) and the third quartile (75th percentile) in a dataset.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Variance: The average of the squared differences between each data point and the mean.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Standard Deviation: The square root of the variance, representing the average deviation of data points from the mean.',
                btnID: 'surveyDetails',
                btn: true,
              },
             
            ]
          },
          {
            label: 'Common Statistical Tools Used For Data Analysis:',
            placeholder: 'Enter here secondary data...',
            link: '',
            subForm:[
              {
                label: 'T-tests: Used to compare the means of two groups and determine if there is a significant difference between them.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'ANOVA (Analysis of Variance): Used to compare the means of more than two groups and determine if there are significant differences among them.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Chi-square tests: Used to test the association between categorical variables in a contingency table.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Correlation and regression: Used to analyze the relationship between two or more continuous variables.',
                btnID: 'surveyDetails',
                btn: true,
              },
             
            ]
          },
          {
            label: 'Interpreting the Results of Hypothesis Tests',
            placeholder: 'Enter here secondary data...',
            link: '',
            subForm:[
              {
                label: 'P-value: The probability of observing the test statistic, or a more extreme value, if the null hypothesis is true. A small p-value (usually below 0.05) indicates that the observed results are unlikely to have occurred by chance alone, suggesting that there is a significant effect or association.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Effect size: A standardized measure of the magnitude or strength of the effect or association being tested. Larger effect sizes indicate more substantial effects or associations.',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Confidence intervals: A range of values within which the true population parameter (e.g., mean, proportion, or difference) is likely to fall, with a specified level of confidence (usually 95%). Narrower confidence intervals indicate greater precision in the estimate.',
                btnID: 'surveyDetails',
                btn: true,
              },
            
             
            ]
          },
          {
            label: 'Primary Data Source',
            placeholder: 'Enter here primary data...',
            link: '',
            subForm: [
              {
                label: 'Survey Details',
                btnID: 'surveyDetails',
                btn: true,
              },
              {
                label: 'Design Your Survey Questions',
                btnID: 'surveyQuestion',
                btn: true,
              },
              {
                label: 'Survey Analysis Method Name',
                btnID: 'surveyAnalysisMethod',
                btn: true,
              },
              {
                label: 'Survey Analysis Method Description',
                btnID: 'surveyAnalysisDescription',
                btn: true,
              },
              {
                label: 'Survey Validation Method Description',
                btnID: 'surveyValidationDescription',
                btn: true,
              },

            ]
          },
          {
            label: 'Secondary Data Source',
            placeholder: 'Enter here secondary data...',
            link: '',
          }
        ]
      },
      {
        title: "Data Collection/ Experimentation Method",
        caption: "",
        image: "",
        video: "",
        form: [
          {
            label: 'Basic Concepts & Terminology of Data Collection',
            placeholder: 'Enter here Data Collection...',
            link: '',
            subForm: [
              {
                label: 'Basic Concepts and Terminology of Data Collection.',
                btnID: 'typeofData',
                btn: true,
              },
              {
                label: 'What is data collection, and why is it important in the research process?',
                btnID: 'sizeofData',
                btn: true,
              },
              {
                label: 'What are the different types of data collection methods (e.g., surveys, interviews, observations)?',
                btnID: 'dataAnalysis',
                btn: true,
              },
              {
                label: 'What are the main differences between primary and secondary data sources?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'Basic Concepts and Terminology of Data Exploration What is data exploration, and how does it help researchers understand their data?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'What are some common techniques for data exploration (e.g., summary statistics, data visualization)?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'How can data exploration help researchers identify issues with data quality or potential patterns in their data?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'Basic Concepts and Terminology of Data Handling What is data handling, and why is it important for the research process?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'What are some common techniques for data handling (e.g., data cleaning, data transformation)?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'How can researchers ensure the accuracy and reliability of their data through proper data handling?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'Basic Concepts and Terminology of Data Arrangement What is data arrangement, and why is it important for data analysis?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'What are some common techniques for data arrangement (e.g., sorting, ranking, categorizing)?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'How can researchers use data arrangement to prepare their data for further analysis or visualization?',
                btnID: 'method',
                btn: true,
              },
              {
                label: 'Basic Concepts and Terminology of Data CalculationWhat is data calculation, and how does it help researchers analyze their data?',
                btnID: 'method',
                btn: true,
              },
     

            ]
          },
          
          {
            label: 'From Primary Source',
            placeholder: 'Enter here Data Collection...',
            link: '',
            subForm: [
              {
                label: 'Type of Data',
                btnID: 'typeofData',
                btn: true,
              },
              {
                label: 'Size of Data',
                btnID: 'sizeofData',
                btn: true,
              },
              {
                label: 'Data Analysis',
                btnID: 'dataAnalysis',
                btn: true,
              },
              {
                label: 'Method',
                btnID: 'method',
                btn: true,
              },

            ]
          },
          {
            label: 'From Secondary Source',
            placeholder: 'Enter here Experimention Method...',
            link: '',
            subForm: [
              {
                label: 'Type of Source',
                btnID: 'typeofSource',
                btn: true,
              },
              {
                label: 'Data Tables',
                btnID: 'dataofTables',
                btn: true,
              },
              {
                label: 'How to use the data in yours Research.',
                btnID: 'howToUseData',
                btn: true,
              }
            ]
          },

        ]

      },
      {
        title: "Sampling / Material Method",
        caption: "",
        image: "",
        video: "64342efae75ab81e6e5fca9a",
        form: [
          {
            label: 'Sampling / Material Method',
            placeholder: 'Enter Here Sampling / Material Method...',
            link: '',
            subForm: []
          },
        ]
      },
      {
        title: "Tools/ Setup",
        caption: "",
        image: "",
        video: "",
        form: [
          {
            label: 'Tools Setup',
            placeholder: 'Enter Here Tool Setup...'
          },
        ]
      },
      {
        title: "Experimentation Method",
        caption: "",
        image: "",
        video: "",
        form: [
          {
            label: 'Experimentation Method',
            placeholder: 'Enter Here Experimentation Method...'
          },
        ]
      },
      {
        title: "Implementation Method",
        caption: "",
        image: "",
        video: "",
        form: [
          {
            label: 'Implementation Method',
            placeholder: 'Enter Here Implementation Method...'
          },
        ]
      },
    ]
  };



  // FORMS DELCARATION START


  titleResearchForm!:FormGroup;
  approvedTitleForm!: FormGroup;
  surveyDetailsForm!: FormGroup;
  researchAreaofInterestForm!: FormGroup;
  articleListForm!: FormGroup;


  articleList: any;
  literatureReviewForm!: FormGroup;
  designResearchForm!: FormGroup;
  toolsTechniqueForm!: FormGroup;
  toolsDetailsForm!: FormGroup;
  surveyObjectiveForm!: FormGroup;
  keyInformationForm!: FormGroup;
  universeForm!: FormGroup;
  searchForm!: FormGroup;
  sampleForm!: FormGroup;

  // FORMS DECLARATION END

  constructor(
    private exService: ExcerciseService,
    private router: Router,
    private exProcess:ProcessExService
  ) { }

  ngOnInit(): void {

    this.getLeveltwoData();


    this.getUserLevelTwoData();
    this.setArticleListForm();

    this.setApprovedTitleForm();
    this.setSurveyDetailsForm();
    this.setResearchAreaofInterestForm();
    this.setLiteratureReviewForm();
    this.setDesignResearchForm();
    this.setToolsTechniqueForm();
    this.setToolsDetailsForm();
    this.setSurveyObjectiveForm();
    this.setKeyInformationForm();
    this.setUniverseForm();
    this.setSearchForm();
    this.setSampleForm();
    this.setTitleResearchForm();
  }

  // FORMS INITILIZATION

  setApprovedTitleForm() {
    this.approvedTitleForm = new FormGroup({
      title: new FormControl('')
    })

  }
  setSurveyDetailsForm() {
    this.surveyDetailsForm = new FormGroup({
      title: new FormControl(''),
      targetAudience: new FormControl('')
    })


  }


  setResearchAreaofInterestForm() {
    this.researchAreaofInterestForm = new FormGroup({
      interestInSubject: new FormControl(''),
      scopeOfResearch: new FormControl(''),
      significanceOfresearch: new FormControl('')
    })
  }

  setArticleListForm() {
    this.articleListForm = new FormGroup({
      title: new FormControl(''),
      journalName: new FormControl(''),
      iisn: new FormControl(''),
      year: new FormControl(''),
      link: new FormControl('')
    })
  }

  setLiteratureReviewForm() {
    this.literatureReviewForm = new FormGroup({
      journalName: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      year: new FormControl(''),
      iisn: new FormControl(''),
      whatTypeOfResearchPresented: new FormControl(''),
      howManySource: new FormControl(''),
      explainMethodologyUse: new FormControl(''),
      keyFindingPresented: new FormControl(''),
      dataPresented: new FormControl('')
    })
  }

  setDesignResearchForm() {
    this.designResearchForm = new FormGroup({
      designResearch: new FormControl('')
    })
  }


  setToolsTechniqueForm() {
    this.toolsTechniqueForm = new FormGroup({
      toolsTechniques: new FormControl('')
    })
  }

  setToolsDetailsForm() {
    this.toolsDetailsForm = new FormGroup({
      tools: new FormControl(''),
      toolsFile: new FormControl('')

    })
  }


  setSurveyObjectiveForm() {

    this.surveyObjectiveForm = new FormGroup({
      objectiveSurvey: new FormControl('')
    })

  }


  setKeyInformationForm() {

    this.keyInformationForm = new FormGroup({
      keyInformation: new FormControl(''),
    })
  }

  setUniverseForm() {
    this.universeForm = new FormGroup({
      universe: new FormControl('')
    })
  }



  setSearchForm() {
    this.searchForm = new FormGroup({

      search: new FormControl('')
    })
  }

  setSampleForm() {
    this.sampleForm = new FormGroup({
      sample: new FormControl('')
    })
  }


  setTitleResearchForm(){
    this.titleResearchForm = new FormGroup({
      titleBachelor: new FormControl(''),
      titleMaster: new FormControl(''),
      favouriteArea: new FormControl(''),
      subAreaTopic: new FormControl(''),
      whyYouFeel: new FormControl('')
    })
  }

  // FORMS INITILIZATION END


// GET LEVEL TWO DATA

twoList:any

getLeveltwoData(){
  this.exProcess.getExDataService().subscribe((result:any)=>{
    console.log(result)
    this.twoList=result.result;
    this.spinner=false;
  })
}

dialogTitle='';
dialogLabel='';
getDialogTitle(e:any,label:any){
  this.dialogTitle=e;
  this.dialogLabel=label;
}


  // upload file

  uploadFile(e: any) {
    console.log(e.target.files[0]);
    this.File = e.target.files[0];
  }





  submitForm(e: any) {
    console.log(e)

    if (e == 'approvedTitle') {
      // console.log(this.approvedTitleForm.value);

      this.exService.putExcerciseLeveTwoService(this.approvedTitleForm.value, 'approvedTitle').subscribe((result: any) => {
        console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })

    } else if (e == 'surveyDetails') {
      // console.log(this.surveyDetailsForm.value);
    } else if (e == 'researchAreaofInterest') {

      // console.log(this.researchAreaofInterestForm.value);
      this.exService.putExcerciseLeveTwoService(this.researchAreaofInterestForm.value, 'areaInterest').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'articleList') {
      // console.log("inside form array");
      // console.log(this.articleListForm.value);
    } else if (e == 'literatureReview') {

      // console.log(this.literatureReviewForm.value);
      this.exService.putExcerciseLeveTwoService(this.literatureReviewForm.value, 'literatureReview').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'designResearch') {
      console.log(e)
      this.exService.putExcerciseLeveTwoService(this.designResearchForm.value, 'designResearch').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'toolsTechnique') {
      // console.log(e);
      // console.log(this.toolsTechniqueForm.value);
      this.exService.putExcerciseLeveTwoService(this.toolsTechniqueForm.value, 'toolsTechnique').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'toolsDetails') {
      console.log('tools details upload');

      console.log(this.toolsDetailsForm.value);
      this.exService.putExcerciseLeveTwoService(this.toolsDetailsForm.value, 'toolsDetails').subscribe((result: any) => {
        // this.message = result.msg;
        // this.getUserLevelTwoData();
        if (result.status == 'success') {

          let formdata: any = new FormData();
          formdata.set("file", this.File);
          this.exService.putExcerciseLeveTwoService(formdata, 'toolsFile').subscribe((data) => {
            this.message = result.msg;
            this.getUserLevelTwoData();
          })
        }
      })
    } else if (e == 'objectiveofsurvey') {
      console.log(this.surveyObjectiveForm.value);
      this.exService.putExcerciseLeveTwoService(this.surveyObjectiveForm.value, 'objectiveofsurvey').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'keyInformation') {
      console.log(this.keyInformationForm.value);
      this.exService.putExcerciseLeveTwoService(this.keyInformationForm.value, 'keyInformation').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'universe') {
      console.log(this.universeForm.value);
      this.exService.putExcerciseLeveTwoService(this.universeForm.value, 'universe').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'search') {
      console.log(this.searchForm.value);
      this.exService.putExcerciseLeveTwoService(this.searchForm.value, 'search').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    } else if (e == 'sample') {
      console.log(this.sampleForm.value);
      this.exService.putExcerciseLeveTwoService(this.sampleForm.value, 'sample').subscribe((result: any) => {
        // console.log(result);
        this.message = result.msg;
        this.getUserLevelTwoData();
      })
    }else if(e=='titleBachelor'){
      console.log(this.titleResearchForm.value);
    }else if(e=='titleMaster'){
      console.log(this.titleResearchForm.value);
    }else if(e=='favouriteArea'){
      console.log(this.titleResearchForm.value);
    }else if(e=='subAreaTopic'){
      console.log(this.titleResearchForm.value);
    }else if(e=='whyYouFeel'){
      console.log(this.titleResearchForm.value);
    }
  }




  // FORMS INITIALIZATION END


  getBtnID(id: any) {
    console.log(id);
    this.researchAreaofInterestDialog = false;
    this.titleDialog = false;
    this.listArticlesDialog = false;
    this.literatureviewDialog = false;
    this.surveyDetailsDialog = false;
    this.surveyQuestionDialog = false;
    this.surveyAnalysisMethodDialog = false;
    this.surveyAnalysisDescriptionDialog = false;
    this.surveyValidationDescriptionDialog = false;
    this.designResearchDialog = false;
    this.toolsTeechniquesDialog = false;
    this.toolsDetailsDialog = false;
    this.typeofDataDialog = false;
    this.sizeofDataDialog = false;
    this.dataAnalysisDialog = false;
    this.methodDialog = false;
    this.typeofSourceDialog = false;
    this.dataofTablesDialog = false;
    this.howToUseDataDialog = false;
    this.objectiveofsurveyDialog = false;
    this.keyInformationDialog = false;
    this.universeDialog = false;
    this.searchDialog = false;
    this.sampleDialog = false;
    this.branchBachelorDialog= false;
    this.branchMasterDialog=false;
    this.fauriteSubjectDialog=false;
    this.subareaTopicDialog=false;
    this.whyYouFeelDialog=false;
    this.typeOfResearchesDialog=false;
    this.listKeyResearchesDialog=false;
    this.typeOfResourcesDialog= false;
    this.getBenefitedDialog=false;
    this.novelConceptDialog=false;
    this.readSomewhereDialog=false;
    this.perspectiveContextDialog=false;
    this.discussHistoryDialog=false;
    this.significancePlayersDialog=false;
    this.establishThroughResearchDialog=false;
    this.needOfResearchDialog=false;
    this.explanationDialog=false;
    this.currentStatusDialog=false;
    this.problemStatusDialog=false;
    this.stateofresearchDialog=false;
    this.includeTechnologiesDialog=false;
    this.importanceAreaIntrestDialog=false;
    this.importanceFutureDevelopmentDialog=false;
    this.challangesObstaclesDialog=false;
    this.challangesPoliticalDialog=false;
    this.personalPerspectiveAreaDialog=false;
    this.personalPerspectiveInterestDialog=false;
    this.personalPerspectiveContributeDialog=false;
    this.futureAreaDialog=false;
    this.futurePotentialsDialog=false;
    this.futureResearchDialog=false;



    if (id == 'title') {
      this.titleDialog = true;
    } else if (id == 'literature-review') {
      this.literatureviewDialog = true;
    } else if (id == 'surveyDetails') {
      this.surveyDetailsDialog = true;
    } else if (id == 'surveyQuestion') {
      this.surveyQuestionDialog = true;
    } else if (id == 'surveyAnalysisMethod') {
      this.surveyAnalysisMethodDialog = true;
    } else if (id == 'surveyAnalysisDescription') {
      this.surveyAnalysisDescriptionDialog = true;
    } else if (id == 'surveyValidationDescription') {
      this.surveyValidationDescriptionDialog = true;
    } else if (id == 'designResearch') {
      this.designResearchDialog = true;
    } else if (id == 'toolsTeechniques') {
      this.toolsTeechniquesDialog = true;
    } else if (id == 'toolsDetails') {
      this.toolsDetailsDialog = true;
    } else if (id == 'typeofData') {
      this.typeofDataDialog = true
    } else if (id == 'researchAreaofInterest') {
      this.researchAreaofInterestDialog = true;
    } else if (id == 'sizeofData') {
      this.sizeofDataDialog = true;
    } else if (id == 'dataAnalysis') {
      this.dataAnalysisDialog = true;
    } else if (id == 'method') {
      this.methodDialog = true;
    } else if (id == 'typeofSource') {
      this.typeofSourceDialog = true;
    } else if (id == 'dataofTables') {
      this.dataofTablesDialog = true;
    } else if (id == 'howToUseData') {
      this.howToUseDataDialog = true;
    } else if (id == 'listArticles') {
      this.listArticlesDialog = true;
    } else if (id == 'objectiveofsurvey') {
      this.objectiveofsurveyDialog = true;
    } else if (id == 'KeyInformation') {
      this.keyInformationDialog = true;
    } else if (id == 'universe') {
      this.universeDialog = true;
    } else if (id == 'response') {
      this.searchDialog = true;
    } else if (id == 'sampleSize') {
      console.log(id);

      this.sampleDialog = true;
    }else if(id=='branchBachelor'){
      this.branchBachelorDialog= true;
    }else if(id=='branchMaster'){
      this.branchMasterDialog=true;
    }else if(id=='fauriteSubject'){
      this.fauriteSubjectDialog=true;
    }else if(id=='subareaTopic'){
      this.subareaTopicDialog=true;
    }else if(id=='whyYouFeel'){
      this.whyYouFeelDialog=true;
    }else if(id=='typeOfResearches'){
      this.typeOfResearchesDialog=true;
    }else if(id=='listKeyResearches'){
      this.listKeyResearchesDialog=true;
    }else if(id=='typeOfResources'){
      this.typeOfResourcesDialog= true;
    }else if(id=='getBenefited'){
      this.getBenefitedDialog=true;
    }else if(id=='novelConcept'){
      this.novelConceptDialog=true;
    }else if(id=='readSomewhere'){

      console.log("inside reade some where")
      this.readSomewhereDialog=true;
    }else if(id=='perspectiveContext'){
      this.perspectiveContextDialog=true;
    }else if(id=='discussHistory'){
      this.discussHistoryDialog=true;
    }else if(id=='significancePlayers'){
      this.significancePlayersDialog=true;
    }else if(id=='establishThroughResearch'){
      this.establishThroughResearchDialog=true;
   
    }else if(id=='needOfResearch'){
      this.needOfResearchDialog=true;
     
    }else if(id=='explanation'){
      this.explanationDialog=true;
      
    }else if(id=='currentStatus'){
      this.currentStatusDialog=true;
     
    }else if(id=='problemStatus'){
      this.problemStatusDialog=true;
    }else if(id=='stateofresearch'){
      this.stateofresearchDialog=true;
    }else if(id=='includeTechnologies'){
      this.includeTechnologiesDialog=true;
    }else if(id=='importanceAreaIntrest'){
      this.importanceAreaIntrestDialog=true;
   
    }else if(id=='importanceFutureDevelopment'){
      this.importanceFutureDevelopmentDialog=true;

    }else if(id=='challangesObstacles'){
      this.challangesObstaclesDialog=true;

    }else if(id=='challangesPolitical'){
      this.challangesPoliticalDialog=true;
     
    }else if(id=='personalPerspectiveArea'){
      this.personalPerspectiveAreaDialog=true;
 
    }else if(id=='personalPerspectiveInterest'){
      this.personalPerspectiveInterestDialog=true;

    }else if(id=='personalPerspectiveContribute'){
      this.personalPerspectiveContributeDialog=true;
  
    }else if(id=='futureArea'){
      this.futureAreaDialog=true;

    }else if(id=='futurePotentials'){
      this.futurePotentialsDialog=true;
    
    }else if(id=='futureResearch'){
      this.futureResearchDialog=true;
    }
  }

  // GET LEVEL TWO USER EXCERCISE DATA

  getUserLevelTwoData() {
    this.exService.getUserLevelTwoExcerciseDataService().subscribe((result: any) => {
      // console.log(result);
      this.levelTwoUserData = result.result[0].excercise.levelTwo;
      // console.log(result.result[0].excercise.levelTwo)
      // console.log(Object.keys(result.result[0].excercise.levelTwo))
      // console.log(Object.keys(result.result[0].excercise.levelTwo).length)
      // console.log(this.levelTwoUserData);
      // console.log(this.levelTwoUserData);
      // this.articleList= this.levelTwoUserData?.literatureReview
      this.articleList = result.result[0].excercise.levelTwo.literatureReview.articleList;
      // console.log(this.articleList);
      let keyDataArray = Object.keys(result.result[0].excercise.levelTwo);
      // console.log(keyDataArray);
      for (let i = 0; i < keyDataArray.length; i++) {
        let data = this.levelTwo.topics.findIndex(item => item.id == keyDataArray[i])
        // console.log(data);

        if (data != undefined) {
          this.levelTwo.topics[data].updated = true;
        }


      }

      // console.log(this.levelTwo.topics[0]);

      // console.log(this.levelTwoUserData)

    })
  }


  // GET RADIO VALUE


  getRadioValue(e: any) {
    this.openEnded = false;
    this.closedEnded = false;
    if (e == 'Open Ended') {
      this.openEnded = true;
    } else if (e == 'Closed Ended') {
      this.closedEnded = true;
    }
  }


  navigateTo(e: any) {
    // console.log(e)
    if (e == 'Research Repository')
      this.router.navigate([`/user-dash/process-excercise/excercise/${e}`])
  }

  // ADD ARTICLE LIST FUNCTION
  addList() {
    this.exService.putExcerciseLeveTwoService(this.articleListForm.value, 'articleList').subscribe((result: any) => {
      // console.log(result);
      if (result.status == 'success') {
        this.articleListForm.reset();
        this.message = result.msg;
        this.getUserLevelTwoData();
      } else {
        alert("Error..!")
      }
    })
  }
}
