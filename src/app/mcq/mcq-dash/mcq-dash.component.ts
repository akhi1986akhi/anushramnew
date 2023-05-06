import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-mcq-dash',
  templateUrl: './mcq-dash.component.html',
  styleUrls: ['./mcq-dash.component.scss']
})
export class McqDashComponent implements OnInit {

  subject = [
    {
      subjectCode: "CW01",
      subjectName: "Research Methodology",
      description: "Select Test Set",
      paperSet: [
        {
          paperSetID: "01",
          paperSetCode: "RM01",
          paperSetName: "RM-SET-1",
          paperName: "Research Methodology",
          questions: [
            {
              questionID: "01",
              question: "1. “Research is ...",
              options: [
                {
                  option: "A. Searching again and again"
                },
                {
                  option: "B. Finding solution to any problem"
                },
                {
                  option: "C. Working in a scientific way to search for truth of any problem",
                  answer: true,
                },
                {
                  option: "D. None of the abover"
                }
              ]
            },
            {
              questionID: "02",
              question: "2. Which of the following is the first step in starting the research process?",
              options: [
                {
                  option: "A. Searching sources of information to locate problem.",
                  answer: true,
                },
                {
                  option: "B. Survey of related literature",
                },
                {
                  option: "C. Identification of problem"
                },
                {
                  option: "D.Exploratory research"
                }
              ]
            },
            {
              questionID: "03",
              question: "3. A common test in research demands much priority on.....",
              options: [
                {
                  option: "A. Reliability"
                },
                {
                  option: "B. Usability"
                },
                {
                  option: "C. Objectivity"
                },
                {
                  option: "D. All of the above",
                  answer: true,
                }
              ]
            },
            {
              questionID: "04",
              question: "4. Action research means.",
              options: [
                {
                  option: "A. A longitudinal research"
                },
                {
                  option: "B. A research with socioeconomic objective"
                },
                {
                  option: "C. An applied research",
                },
                {
                  option: "D. A research initiated to solve an immediate problem",
                  answer: true,
                }
              ]
            },
            {
              questionID: "05",
              question: "5. The essential qualities of a researcher are	.....",
              options: [
                {
                  option: "A. Spirit of free enquiry"
                },
                {
                  option: "B. Systematization or theorizing of knowledge"
                },
                {
                  option: "C. All the above",
                  answer: true,
                },
                {
                  option: "D. Reliance on observation and evidence"
                }
              ]
            },
            {
              questionID: "06",
              question: "6. In the process of conducting research 'Formulation of Hypothesis' is followed by.  ",
              options: [
                {
                  option: "A. Statement of Objectives"
                },
                {
                  option: "B. Analysis of Data"
                },
                {
                  option: "C. Collection of Data",
                },
                {
                  option: "D. Selection of Research Tools",
                  answer: true,
                }
              ]
            },
            {
              questionID: "07",
              question: "7. (E)	UNESCO assisted Model Public Library in India is located at",
              options: [
                {
                  option: "A. Kolkata"
                },
                {
                  option: "B. Delhi",
                  answer: true,
                },
                {
                  option: "C. Mumbai",
                },
                {
                  option: "D. Chennai"
                }
              ]
            },
            {
              questionID: "08",
              question: "8. Questionnaire is a......	",
              options: [
                {
                  option: "A. Research method"
                },
                {
                  option: "B. Measurement technique"
                },
                {
                  option: "C. Tool for data collection",
                  answer: true,
                },
                {
                  option: "D. Data analysis technique"
                }
              ]
            },

            {
              questionID: "09",
              question: "9 ...............'Controlled Group' is a term used in	",
              options: [
                {
                  option: "A. Survey research"
                },
                {
                  option: "B. Historical research"
                },
                {
                  option: "C. Descriptive research",
                  answer: true,
                },
                {
                  option: "D. none of the above."
                }
              ]
            },
            {
              questionID: "10",
              question: "10. A set of rules that govern overall data communications system is popularly known as",
              options: [
                {
                  option: "A. Protocol"
                },
                {
                  option: "B. Agreement"
                },
                {
                  option: "C. Pact ",
                  answer: true,
                },
                {
                  option: "D. Memorandum"
                }
              ]
            },
            {
              questionID: "11",
              question: "11. An image, perception or concept that is capable of measurement is called	.",
              options: [
                {
                  option: "A. Scale"
                },
                {
                  option: "B. Hypothesis"
                },
                {
                  option: "C. Type",
                },
                {
                  option: "D. Variable",
                  answer: true,
                }
              ]
            },
            {
              questionID: "12",
              question: "12. In order to pursue the research, which of the following is priorly required?",
              options: [
                {
                  option: "A. Developing a research design"
                },
                {
                  option: "B. Formulating a research question",
                  answer: true,
                },
                {
                  option: "C. Deciding about the data analysis procedure",
                },
                {
                  option: "D. Formulating a research hypothesis"
                }
              ]
            },
            {
              questionID: "13",
              question: "13. What are the conditions in which Type-I error occurs?",
              options: [
                {
                  option: "A. The null hypotheses get accepted even if it is false"
                },
                {
                  option: "B. The null hypotheses get rejected even if it is true",
                  answer: true,
                },
                {
                  option: "C. Both the null hypotheses as well as alternative hypotheses are rejected",
                },
                {
                  option: "D. None of the above"
                }
              ]
            },
            {
              questionID: "14",
              question: "14. How to judge the depth of any research?",
              options: [
                {
                  option: "A. By research title"
                },
                {
                  option: "B. By research duration"
                },
                {
                  option: "C. By research objectives",
                  answer: true,
                },
                {
                  option: "D. By total expenditure on research"
                }
              ]
            },
            {
              questionID: "15",
              question: "15. Which of the following is not the method of Research?",
              options: [
                {
                  option: "A. Survey"
                },
                {
                  option: "B. Historical"
                },
                {
                  option: "C. Observation",
                  answer: true,
                },
                {
                  option: "D. Philosophical "
                }
              ]
            },
            {
              questionID: "16",
              question: "16. Research is...?",
              options: [
                {
                  option: "A. Searching again and again"
                },
                {
                  option: "B. Finding solution to any problem"
                },
                {
                  option: "C. Working in a scientific way to search for truth of any problem",
                  answer: true,
                },
                {
                  option: "D. None of the above"
                }
              ]
            },
            {
              questionID: "17",
              question: "17. In the process of conducting research ‘Formulation of Hypothesis” is followed by",
              options: [
                {
                  option: "A. Statement of Objectives"
                },
                {
                  option: "B. Analysis of Data"
                },
                {
                  option: "C. Selection of Research Tools",
                  answer: true,
                },
                {
                  option: "D. Collection of Data"
                }
              ]
            },
            {
              questionID: "18",
              question: "18. The main objective of........	study’s to acquire knowledge.",
              options: [
                {
                  option: "A. Exploratory"
                },
                {
                  option: "B. Descriptive",
                  answer: true,
                },
                {
                  option: "C. Diagnostic",
                },
                {
                  option: "D. Descriptive and Diagnostic"
                }
              ]
            },
            {
              questionID: "19",
              question: "19. .......	is concerned with discovering and testing certain variables with respect to their association or disassociation",
              options: [
                {
                  option: "A. Exploratory"
                },
                {
                  option: "B. Descriptive"
                },
                {
                  option: "C. Diagnostic",
                  answer: true,
                },
                {
                  option: "D. Descriptive and diagnostic"
                }
              ]
            },
            {
              questionID: "20",
              question: "20. One of the terms given below is defined as a bundle of meanings or characteristics associated with certain events, objects, conditions, situations, and the like",
              options: [
                {
                  option: "A. Construct"
                },
                {
                  option: "B. Definition"
                },
                {
                  option: "C. Concept",
                  answer: true,
                },
                {
                  option: "D. Variable"
                }
              ]
            }
          ]
        },
        {
          paperSetID: "02",
          paperSetCode: "RM02",
          paperSetName: "RM-SET-2",
          paperName: "Research Methodology",
          questions: [
            {
              questionID: "01",
              question: "1. “One of the methods of logical reasoning process” is called",
              options: [
                {
                  option: "A. Induction"
                },
                {
                  option: "B. Deduction"
                },
                {
                  option: "C. Research",

                },
                {
                  option: "D. Experiment",
                  answer: true,
                }
              ]
            },
            {
              questionID: "02",
              question: "“02. A systematic step-by-step Procedure following the logical process of reasoning” called",
              options: [
                {
                  option: "A. Experiment",
                  answer: true,
                },
                {
                  option: "B. Observation",

                },
                {
                  option: "C. Deduction"
                },
                {
                  option: "D. Scientific method"
                }
              ]
            },
            {
              questionID: "03",
              question: "3. An essential Criterion of Scientific study is called",
              options: [
                {
                  option: "A. Belief"
                },
                {
                  option: "B. Value"
                },
                {
                  option: "C. Objectivity",
                  answer: true,
                },
                {
                  option: "D. Subjective",
                }
              ]
            },
            {
              questionID: "04",
              question: "4. “Reasoning from general to particular “is called",
              options: [
                {
                  option: "A. Induction"
                },
                {
                  option: "B. Deduction ",
                  answer: true,
                },
                {
                  option: "C. Observation",

                },
                {
                  option: "D. Experience"
                }
              ]
            },
            {
              questionID: "05",
              question: "5. “Deduction and induction are a part of a system of reasoning” – stated by",
              options: [
                {
                  option: "A. Caroline"
                },
                {
                  option: "B. P. V. Young",
                  answer: true,
                },
                {
                  option: "C. Dewey John",

                },
                {
                  option: "D. Emory"
                }
              ]
            },
            {
              questionID: "06",
              question: "6. ……….. is “systematically conceptual structure of interrelated elements in some schematic form” ",
              options: [
                {
                  option: "A. Concept"
                },
                {
                  option: "B. Variable "
                },
                {
                  option: "C. Model",
                  answer: true,
                },
                {
                  option: "D. Facts"
                }
              ]
            },
            {
              questionID: "07",
              question: "07. The method by which a sample is chosen",
              options: [
                {
                  option: "A. Unit"
                },
                {
                  option: "B. Design",
                  answer: true,
                },
                {
                  option: "C. Random",

                },
                {
                  option: "D. Census"
                }
              ]
            },
            {
              questionID: "08",
              question: "08. Research conducted to find a solution for an immediate problem is ………….",
              options: [
                {
                  option: "A. Fundamental Research"
                },
                {
                  option: "B. Analytical Research"
                },
                {
                  option: "C. Survey",

                },
                {
                  option: "D. Action Research",
                  answer: true,
                }
              ]
            },

            {
              questionID: "09",
              question: "09. Fundamental Research is otherwise called",
              options: [
                {
                  option: "A. Action Research"
                },
                {
                  option: "B. Survey"
                },
                {
                  option: "C. Pilot study",

                },
                {
                  option: "D. Pure Research",
                  answer: true,
                }
              ]
            },
            {
              questionID: "10",
              question: "10. A research that follows the case study method is called",
              options: [
                {
                  option: "A. Clinical or diagnostic",
                  answer: true,
                },
                {
                  option: "B. Causal"
                },
                {
                  option: "C. Analytical",

                },
                {
                  option: "D. Qualitative"
                }
              ]
            },
            {
              questionID: "11",
              question: "11. Research conducted in a classroom atmosphere is called",
              options: [
                {
                  option: "A. Field study",

                },
                {
                  option: "B. Survey"
                },
                {
                  option: "C. Laboratory Research",
                  answer: true,
                },
                {
                  option: "D. Empirical Research"
                }
              ]
            },
            {
              questionID: "12",
              question: "12. Research through experiment and observation is called",
              options: [
                {
                  option: "A. Clinical Research",

                },
                {
                  option: "B. Experimental Research"
                },
                {
                  option: "C. Laboratory Research"

                },
                {
                  option: "D. Empirical Research",
                  answer: true,
                }
              ]
            },
            {
              questionID: "13",
              question: "13. ………….. is a way to systematically solve the research problem",
              options: [
                {
                  option: "A. Technique",

                },
                {
                  option: "B. Operations"
                },
                {
                  option: "C. Research methodology",
                  answer: true,

                },
                {
                  option: "D. Research Process"

                }
              ]
            },
            {
              questionID: "14",
              question: "14. Good Research is always …………… ",
              options: [
                {
                  option: "A. Slow",

                },
                {
                  option: "B. Fast"
                },
                {
                  option: "C. Narrow"

                },
                {
                  option: "D. Systematic",
                  answer: true,

                }
              ]
            },
            {
              questionID: "15",
              question: "15. Research method is a part of ………….",
              options: [
                {
                  option: "A. Problem",

                },
                {
                  option: "B. Experiment"
                },
                {
                  option: "C. Research Techniques"

                },
                {
                  option: "D. Research methodology",
                  answer: true,

                }
              ]
            },
            {
              questionID: "16",
              question: "16. Identifying the causes of a problem and possible solutions to a problem is",
              options: [
                {
                  option: "A. Field Study",
                },
                {
                  option: "B. Diagnosistic study",
                  answer: true,
                },
                {
                  option: "C. Action study"
                },
                {
                  option: "D. Pilot study",

                }
              ]
            },
            {
              questionID: "17",
              question: "17. …………… is a motivation for research in students",
              options: [
                {
                  option: "A. Research degree",
                  answer: true,
                },
                {
                  option: "B. Research Academy"
                },
                {
                  option: "C. Research Labs          "
                },
                {
                  option: "D. Research Problems",

                }
              ]
            },
            {
              questionID: "18",
              question: "18. Which of the following is an example of primary data? ",
              options: [
                {
                  option: "A. Book",

                },
                {
                  option: "B. Journal"
                },
                {
                  option: "C. News Paper",
                  answer: true,
                },
                {
                  option: "D. Census Report",

                }
              ]
            },
            {
              questionID: "19",
              question: "19. A question that requires a solution is ………….",
              options: [
                {
                  option: "A. Observation",

                },
                {
                  option: "B. Problem",
                  answer: true,
                },
                {
                  option: "C. Data",

                },
                {
                  option: "D. Experiment",

                }
              ]
            },
            {
              questionID: "20",
              question: "20. Converting a question into a Researchable problem is called …………",
              options: [
                {
                  option: "A. Solution",

                },
                {
                  option: "B. Examination",

                },
                {
                  option: "C. Problem formulation",
                  answer: true,
                },
                {
                  option: "D. Problem Solving",

                }
              ]
            },
            {
              questionID: "21",
              question: "21. The first step in formulating a problem is",
              options: [
                {
                  option: "A. Statement of the problem",
                  answer: true,

                },
                {
                  option: "B. Gathering of Data",

                },
                {
                  option: "C. Measurement",

                },
                {
                  option: "D. Survey",

                }
              ]
            },
            {
              questionID: "22",
              question: "22. A Hypothesis that develops while planning the research is ",
              options: [
                {
                  option: "A. Null Hypothesis",
                  answer: true,

                },
                {
                  option: "B. Working Hypothesis",

                },
                {
                  option: "C. Relational Hypothesis",

                },
                {
                  option: "D. Descriptive Hypothesis",

                }
              ]
            }
          ]
        },
        {
          paperSetID: "03",
          paperSetCode: "RM03",
          paperSetName: "RM-SET-3",
          paperName: "Research Methodology",
          questions: [
            {
              questionID: "01",
              question: "1. Concepts are ......	of Research",
              options: [
                {
                  option: "A. Guide"
                },
                {
                  option: "B. Tools",
                  answer: true,
                },
                {
                  option: "C. Methods",

                },
                {
                  option: "D. Variables",
                }
              ]
            },
            {
              questionID: "02",
              question: "02. Concept is of two types",
              options: [
                {
                  option: "A. Abstract and Coherent",
                },
                {
                  option: "B. Concrete and Coherent",
                  
                },
                {
                  option: "C. Abstract and concrete",
                  answer: true,
                },
                {
                  option: "D. None of the above",
                }
              ]
            },
            {
              questionID: "03",
              question: "03. A statement of the quantitative research question should:",
              options: [
                {
                  option: "A. Extend the statement of purpose by specifying exactly the question (s the researcher will address",
                },
                {
                  option: "B. Help the research in selecting appropriate participants, research methods, measures, and materials",
                  
                },
                {
                  option: "C. Specify the variables of interest"
                },
                {
                  option: "D. All the above",
                  answer: true,
                }
              ]
            },
            {
              questionID: "04",
              question: "04. Why do you need to review the existing literature?",
              options: [
                {
                  option: "A. To make sure you have a long list of references",
                },
                {
                  option: "B. Because without it, you could never reach the required word-count",
                  
                },
                {
                  option: "C. To find out what is already known about your area of interest",
                  answer: true,
                },
                {
                  option: "D. To help in your general studying "
                }
              ]
            },
            {
              questionID: "05",
              question: "05. What do you mean by Unit of Analysis?",
              options: [
                {
                  option: "A. Main parameter",
                  answer: true,
                },
                {
                  option: "B. Variables",

                },
                {
                  option: "C. Sample"
                },
                {
                  option: "D. Constructs"
                }
              ]
            },
            {
              questionID: "06",
              question: "06. A formal document that presents the research objectives, design of achieving these objectives, and the expected outcomes/deliverables of the study is called",
              options: [
                {
                  option: "A. Research design",
                },
                {
                  option: "B. Research proposal",
                  answer: true,

                },
                {
                  option: "C. Research hypothesis"
                },
                {
                  option: "D. Research report"
                }
              ]
            },
            {
              questionID: "07",
              question: "07. Survey is a ...........	Study",
              options: [
                {
                  option: "A. Descriptive",
                },
                {
                  option: "B. Fact finding",
                  answer: true,

                },
                {
                  option: "C. Analytical"
                },
                {
                  option: "D. Systematic"
                }
              ]
            },
            {
              questionID: "08",
              question: "08. In a survey there is an enumerator and a ………………….",
              options: [
                {
                  option: "A. Guide",
                },
                {
                  option: "B. Respondent",
                  answer: true,

                },
                {
                  option: "C. Supervisor"
                },
                {
                  option: "D. Messenger"
                }
              ]
            },
            {
              questionID: "09",
              question: "09. The first purpose of a survey is to …………….",
              options: [
                {
                  option: "A. Description",
                },
                {
                  option: "B. Evaluation",
                  
                },
                {
                  option: "C. Pration"
                },
                {
                  option: "D. Provide Information",
                  answer: true,
                }
              ]
            },
            {
              questionID: "10",
              question: "10. Questions in which only two alternatives are possible is called",
              options: [
                {
                  option: "A. Multiple choice questions",
                },
                {
                  option: "B. Dichotomous questions",
                  answer: true,

                },
                {
                  option: "C. Open ended questions"
                },
                {
                  option: "D. Structured questions"
                }
              ]
            },
            {
              questionID: "11",
              question: "11. What are the core elements of a Research Process?",
              options: [
                {
                  option: "A. Introduction; Data Collection; Data Analysis; Conclusions and Recommendations",
                },
                {
                  option: "B. Executive Summary; Literature Review; Data Gathered; Conclusions; Bibliography",
                  
                },
                {
                  option: "C. Research Plan; Research Data; Analysis; References"
                },
                {
                  option: "D. Introduction; Literature Review; Research Methodology; Results; Discussions and Conclusions",
                  answer: true,
                }
              ]
            },
            {
              questionID: "12",
              question: "12. Identifying causes of a problem and possible solution to a problem is",
              options: [
                {
                  option: "A. Field Study",
                },
                {
                  option: "B. Diagnosis tic study",
                  
                  answer: true,
                },
                {
                  option: "C. Action study"
                },
                {
                  option: "D. Pilot study"
                }
              ]
            },
            {
              questionID: "13",
              question: "13. Second step in problem formulation is",
              options: [
                {
                  option: "A. Statement of the problem",
                },
                {
                  option: "B. Understanding the nature of the problem",
                  answer: true,
                },
                {
                  option: "C. Survey"
                },
                {
                  option: "D. Discussions"
                }
              ]
            },
            {
              questionID: "14",
              question: "14. Questionnaire is filled by ……………….",
              options: [
                {
                  option: "A. Respondent",
                  answer: true,
                },
                {
                  option: "B. Everybody",

                },
                {
                  option: "C. Enumerator"
                },
                {
                  option: "D. None of the above"
                }
              ]
            },
            {
              questionID: "15",
              question: "15. The main problem in questionnaire is",
              options: [
                {
                  option: "A. Accessible to Diverse Respondent",
                },
                {
                  option: "B. Greater Anonymity",
                  
                },
                {
                  option: "C. Shows an inability of respondent to provide information",
                  answer: true,
                },
                {
                  option: "D. None of these"
                }
              ]
            },
            {
              questionID: "16",
              question: "16. What does the term 'longitudinal design' mean?",
              options: [
                {
                  option: "A. A study completed far away from where the researcher lives.",
                },
                {
                  option: "B. A study which is very long to read.",
                  
                },
                {
                  option: "C. A study with two contrasting cases.",
                },
                {
                  option: "D. A study completed over a distinct period of time to map changes in social phenomena.",
                  answer: true,
                }
              ]
            },
            {
              questionID: "17",
              question: "17. Which of the following is true regarding research objectives?",
              options: [
                {
                  option: "A. Research objectives, when achieved, will provide sufficient earnings to obtain areasonablereturn on investment.",
                },
                {
                  option: "B. Researchobjectives, when obtained, will ensure the viability of the marketing research department.",
                  
                },
                {
                  option: "C. Research objectives, when achieved, provide the information necessary to solve the problem.",
                  answer: true,
                },
                {
                  option: "D. Research objectives are seldom achieved but should be stated as goals to be sought."
                }
              ]
            },
            {
              questionID: "18",
              question: "18. Wrong questionnaire is an example of …………..",
              options: [
                {
                  option: "A. Primary data collection problem",
                  answer: true,
                },
                {
                  option: "B. Secondary collection problem",
                },
                {
                  option: "C. a and b both",
                },
                {
                  option: "D. None of the above"
                }
              ]
            },
            {
              questionID: "19",
              question: "19. The existing company information is an example of which data?",
              options: [
                {
                  option: "A. Primary",
                },
                {
                  option: "B. Secondary",
                  
                  answer: true,
                },
                {
                  option: "C. Both a and b",
                },
                {
                  option: "D. None of the above"
                }
              ]
            },
            {
              questionID: "20",
              question: "20. Your colleague is confused about using the marketing research process, as he knows that something is wrong but is not sure of the specific causes to investigate. He seems to be having problems with	, which is often the hardest step to take",
              options: [
                {
                  option: "A. Developing the research plan",
                },
                {
                  option: "B. Determining a research approach",
                  
                },
                {
                  option: "C. Defining the problem and research objectives",
                  answer: true,
                },
                {
                  option: "D. Selecting a research agency"
                }
              ]
            },
            
          ]
        }
      ],

    },
    {
      subjectCode: "CW02",
      subjectName: "Research & Publication Ethics",
      description: "Select Test Set",
      paperSet: [
        {
          paperSetID: "01",
          paperSetCode: "RPE01",
          paperSetName: "RPE-SET-1",
          paperName: "Research & Publication Ethics",
          questions: [
            {
              questionID: "01",
              question: "1. The four main divisions of philosophy are metaphysics, epistemology, axiology, and _____. ",
              options: [
                {
                  option: "A. bioethics "
                },
                {
                  option: "B. logic ",
                  answer: true,
                },
                {
                  option: "C. aesthetics ",
                },
                {
                  option: "D. categorical logic "
                }
              ]
            },
            {
              questionID: "02",
              question: "2. The study of reality in the broadest sense, an inquiry into the elemental nature of the universe and the things in it, is known as _____.  ",
              options: [
                {
                  option: "A. metaphysics "
                },
                {
                  option: "B. epistemology",
                },
                {
                  option: "C. quantum physics ",
                  answer: true,
                },
                {
                  option: "D. axiology"
                }
              ]
            },
            {
              questionID: "03",
              question: "3. Questions like “What is knowledge?” and “What is truth?” are mainstays in the branch of philosophy known as _____. ",
              options: [
                {
                  option: "A.  logic "
                },
                {
                  option: "B. metaphysics ",
                  answer: true,
                },
                {
                  option: "C. epistemology ",
                },
                {
                  option: "D. aesthetics "
                }
              ]
            },
            {
              questionID: "04",
              question: "04. For Socrates, an unexamined life is a tragedy because it results in grievous harm to _____. ",
              options: [
                {
                  option: "A. the state",
                  answer: true,
                },
                {
                  option: "B. the justice system",
                },
                {
                  option: "C. the body",
                },
                {
                  option: "D. the soul "
                }
              ]
            },
            {
              questionID: "05",
              question: "05. For Socrates, the soul is harmed by lack of _____. ",
              options: [
                {
                  option: "A.  knowledge "
                },
                {
                  option: "B. wealth ",
                  answer: true,
                },
                {
                  option: "C. community ",
                },
                {
                  option: "D. courage "
                }
              ]
            },
            {
              questionID: "06",
              question: "06. A question-and-answer dialogue in which propositions are methodically scrutinized to uncover the truth is known as _____. ",
              options: [
                {
                  option: "A. an argument"
                },
                {
                  option: "B. the Socratic method ",
                  answer: true,
                },
                {
                  option: "C. the Socratic jest ",
                },
                {
                  option: "D. a debate "
                }
              ]
            },
            {
              questionID: "07",
              question: "07. According to Socrates, a clear sign that a person has _____ is her exclusive pursuit of social status, wealth, power, and pleasure. ",
              options: [
                {
                  option: "A.  philosophical ambition "
                },
                {
                  option: "B. worldly wisdom ",
                },
                {
                  option: "C. exceptional desires",
                  answer: true,
                },
                {
                  option: "D. an unhealthy soul "
                }
              ]
            },
            {
              questionID: "08",
              question: "08. The famous statement “An unexamined life is not worth living” is attributed to _____. ",
              options: [
                {
                  option: "A.  Aristotle "
                },
                {
                  option: "B. John Locke ",
                },
                {
                  option: "C. Socrates ",
                  answer: true,
                },
                {
                  option: "D. Plato"
                }
              ]
            },
            {
              questionID: "09",
              question: "09. The word “psychology’ comes from:",
              options: [
                {
                  option: "A.  Latin"
                },
                {
                  option: "B. Spanish ",
                },
                {
                  option: "C. Greek",
                  answer: true,
                },
                {
                  option: "D. Italian"
                }
              ]
            },
            {
              questionID: "10",
              question: "10. Psychology is defined as the scientific study of:",
              options: [
                {
                  option: "A.  people and things"
                },
                {
                  option: "B. emotions and beliefs",
                  answer: true,
                },
                {
                  option: "C. perception and religion",
                },
                {
                  option: "D. mind and behaviour"
                }
              ]
            },
            {
              questionID: "11",
              question: "11. The scientific approach is more useful at answering questions about ______ than questions about ______.",
              options: [
                {
                  option: "A. facts, values",
                  answer: true,
                },
                {
                  option: "B. ideas, emotions",
                },
                {
                  option: "C. values, facts",
                },
                {
                  option: "D. emotions, facts"
                }
              ]
            },
            {
              questionID: "12",
              question: "12. According to the text, the lower level of explanation corresponds to ______ processes.",
              options: [
                {
                  option: "A.  social"
                },
                {
                  option: "B. cultural",
                },
                {
                  option: "C. biological",
                  answer: true,
                },
                {
                  option: "D. interpersonal"
                }
              ]
            },
            {
              questionID: "13",
              question: "13. A psychologist exploring the impact of a new drug on activity in the brain is working on the ______ level of explanation.",
              options: [
                {
                  option: "A.  lower",
                  answer: true,
                },
                {
                  option: "B. middle",
                },
                {
                  option: "C. upper",
                },
                {
                  option: "D. all of the above"
                }
              ]
            },
            {
              questionID: "14",
              question: "14. A psychologist studying what makes people laugh in different countries around the world is working on the ______ level of explanation.",
              options: [
                {
                  option: "A. lower"
                },
                {
                  option: "B. middle",
                },
                {
                  option: "C. higher",
                  answer: true,
                },
                {
                  option: "D. none of the above"
                }
              ]
            },
            {
              questionID: "15",
              question: "15. Different people react differently to the same situation. This is referred to as:",
              options: [
                {
                  option: "A.  multiple determinants"
                },
                {
                  option: "B. nativism",
                },
                {
                  option: "C. the Simpson effect",
                },
                {
                  option: "D. individual differences",
                  answer: true,
                }
              ]
            },
            {
              questionID: "16",
              question: "16. ______ is to nature as ______ is to nurture.",
              options: [
                {
                  option: "A.  environment, genes"
                },
                {
                  option: "B. conscious, unconscious",
                },
                {
                  option: "C. inaccuracy, accuracy",
                },
                {
                  option: "D. biology, experience",
                  answer: true,
                }
              ]
            },
            {
              questionID: "17",
              question: "17. The term “tabula rasa” highlights the importance of ______ in shaping behaviour.",
              options: [
                {
                  option: "A. genes "
                },
                {
                  option: "B. experience",
                  answer: true,
                },
                {
                  option: "C. nature",
                },
                {
                  option: "D. predestination"
                }
              ]
            },
            {
              questionID: "18",
              question: "18. The Greek word Pragma means ",
              options: [
                {
                  option: "A.  Truth"
                },
                {
                  option: "B. Act or deed ",
                  answer: true,
                },
                {
                  option: "C. Utility",
                },
                {
                  option: "D. Beauty "
                }
              ]
            },
            {
              questionID: "19",
              question: "19. The author of Republic ",
              options: [
                {
                  option: "A. Socrates "
                },
                {
                  option: "B. Descartes ",
                },
                {
                  option: "C. Plato",
                  answer: true,
                },
                {
                  option: "D. Hume "
                }
              ]
            },
            {
              questionID: "20",
              question: "20. The metaphysical view that there is one ultimate reality is called ",
              options: [
                {
                  option: "A.  Dualism"
                },
                {
                  option: "B. Pluralism ",
                },
                {
                  option: "C. Monism",
                  answer: true,
                },
                {
                  option: "D. None of these "
                }
              ]
            },
          ]
        },
        {
          paperSetID: "02",
          paperSetCode: "RPE02",
          paperSetName: "RPE-SET-2",
          paperName: "Research & Publication Ethics",
          questions: [
            {
              questionID: "01",
              question: "01. According to the modern scientists matter is",
              options: [
                {
                  option: "A. Light"
                },
                {
                  option: "B. Energy ",
                  answer: true,
                },
                {
                  option: "C. Illusion",
                },
                {
                  option: "D. All of these "
                }
              ]
            },
            {
              questionID: "02",
              question: "2. ——— is a Greek atomist",
              options: [
                {
                  option: "A. Democritus",
                  answer: true,
                },
                {
                  option: "B. Xenophanes ",
                },
                {
                  option: "C. Xenophon",
                },
                {
                  option: "D. Zeno"
                }
              ]
            },
            {
              questionID: "03",
              question: "3. The Philosophy of Hegel is known as ",
              options: [
                {
                  option: "A. Phenomenal idealism"
                },
                {
                  option: "B. Personal idealism ",
                  answer: true,
                },
                {
                  option: "C. Objective idealism",
                },
                {
                  option: "D. Absolute idealism "
                }
              ]
            },
            {
              questionID: "04",
              question: "04. The founder of Positivism is ",
              options: [
                {
                  option: "A. Saint Simon",
                },
                {
                  option: "B. C. S Pierce",
                },
                {
                  option: "C. August Comte",
                  answer: true,
                },
                {
                  option: "D. Francis Bacon "
                }
              ]
            },
            {
              questionID: "05",
              question: "05. The author of Novum Organum is ",
              options: [
                {
                  option: "A. Rene Descartes"
                },
                {
                  option: "B. Lemnitzer ",
                },
                {
                  option: "C. John Dewey",
                },
                {
                  option: "D. Francis Bacon ",
                  answer: true,
                }
              ]
            },
            {
              questionID: "06",
              question: "06. The four main divisions of philosophy are metaphysics, epistemology, axiology, and _____. ",
              options: [
                {
                  option: "A. bioethics "
                },
                {
                  option: "B. logic",
                  answer: true,
                },
                {
                  option: "C. aesthetics",
                },
                {
                  option: "D. categorical logic "
                }
              ]
            },
            {
              questionID: "07",
              question: "07. . The study of reality in the broadest sense, an inquiry into the elemental nature of the universe and the things in it, is known as _____. ",
              options: [
                {
                  option: "A. metaphysics ",
                  answer: true,
                },
                {
                  option: "B. epistemology ",
                },
                {
                  option: "C. quantum physics ",
                },
                {
                  option: "D. axiology "
                }
              ]
            },
            {
              questionID: "08",
              question: "08. Questions like “What is knowledge?” and “What is truth?” are mainstays in the branch of philosophy known as _____. ",
              options: [
                {
                  option: "A. logic "
                },
                {
                  option: "B. metaphysics ",
                },
                {
                  option: "C. epistemology ",
                  answer: true,
                },
                {
                  option: "D. aesthetics "
                }
              ]
            },
            {
              questionID: "09",
              question: "09. For Socrates, an unexamined life is a tragedy because it results in grievous harm to _____.",
              options: [
                {
                  option: "A. the state ",
                  answer: true,
                },
                {
                  option: "B. the justice system",
                },
                {
                  option: "C. the body",
                },
                {
                  option: "D. the soul "
                }
              ]
            },
            {
              questionID: "10",
              question: "10. For Socrates, the soul is harmed by lack of _____. ",
              options: [
                {
                  option: "A. knowledge ",
                  answer: true,
                },
                {
                  option: "B. wealth ",
                },
                {
                  option: "C. community ",
                },
                {
                  option: "D. courage "
                }
              ]
            },
            {
              questionID: "11",
              question: "11. A question-and-answer dialogue in which propositions are methodically scrutinized to uncover the truth is known as _____. ",
              options: [
                {
                  option: "A. an argument ",
                },
                {
                  option: "B. the Socratic method ",
                  answer: true,
                },
                {
                  option: "C. the Socratic jest ",
                },
                {
                  option: "D. a debate "
                }
              ]
            },
            {
              questionID: "12",
              question: "12. According to Socrates, a clear sign that a person has _____ is her exclusive pursuit of social status, wealth, power, and pleasure. ",
              options: [
                {
                  option: "A. philosophical ambition "
                },
                {
                  option: "B. worldly wisdom ",
                },
                {
                  option: "C. exceptional desires ",
                },
                {
                  option: "D. an unhealthy soul ",
                  answer: true,
                }
              ]
            },
            {
              questionID: "13",
              question: "13. The famous statement “An unexamined life is not worth living” is attributed to _____. ",
              options: [
                {
                  option: "A. Aristotle",
                },
                {
                  option: "B. John Locke ",
                },
                {
                  option: "C. Socrates",
                  answer: true,
                },
                {
                  option: "D. Plato "
                }
              ]
            },
            {
              questionID: "14",
              question: "14. The word “psychology’ comes from:",
              options: [
                {
                  option: "A. Latin"
                },
                {
                  option: "B. Spanish ",
                },
                {
                  option: "C. Greek",
                  answer: true,
                },
                {
                  option: "D. Italian"
                }
              ]
            },
            {
              questionID: "15",
              question: "15. Psychology is defined as the scientific study of:",
              options: [
                {
                  option: "A. people and things"
                },
                {
                  option: "B. emotions and beliefs",
                },
                {
                  option: "C. perception and religion",
                },
                {
                  option: "D. mind and behaviour",
                  answer: true,
                }
              ]
            },
            {
              questionID: "16",
              question: "16. The scientific approach is more useful at answering questions about ______ than questions about ______.",
              options: [
                {
                  option: "A. facts, values",
                  answer: true,
                },
                {
                  option: "B. ideas, emotions",
                },
                {
                  option: "C. values, facts",
                },
                {
                  option: "D. emotions, facts",
                }
              ]
            },
            {
              questionID: "17",
              question: "17. According to the text, the lower level of explanation corresponds to ______ processes.",
              options: [
                {
                  option: "A. social"
                },
                {
                  option: "B. cultural",
                },
                {
                  option: "C. biological",
                  answer: true,
                },
                {
                  option: "D. interpersonal"
                }
              ]
            },
            {
              questionID: "18",
              question: "18. A psychologist exploring the impact of a new drug on activity in the brain is working on the ______ level of explanation.",
              options: [
                {
                  option: "A. lower",
                  answer: true,
                },
                {
                  option: "B. middle",
                },
                {
                  option: "C. upper",
                },
                {
                  option: "D. all of the above"
                }
              ]
            },
            {
              questionID: "19",
              question: "19. A psychologist studying what makes people laugh in different countries around the world is working on the ______ level of explanation.",
              options: [
                {
                  option: "A. lower"
                },
                {
                  option: "B. middle",
                },
                {
                  option: "C. higher",
                  answer: true,
                },
                {
                  option: "D. none of the above "
                }
              ]
            },
            {
              questionID: "20",
              question: "20. Different people react differently to the same situation. This is referred to as:",
              options: [
                {
                  option: "A.  multiple determinants"
                },
                {
                  option: "B. nativism ",
                },
                {
                  option: "C. the Simpson effect",
                },
                {
                  option: "D. individual differences",
                  answer: true,
                }
              ]
            },
          ]
        },
      ],
    },
    {
      subjectCode: "CW03",
      subjectName: "Computer Application in Research",
      description: "Select Test Set",
      paperSet: [
        {
          paperSetID: "01",
          paperSetCode: "CAR01",
          paperSetName: "CAR-SET-1",
          paperName: "Computer Application in Research",
          questions: [
            {
              questionID: "01",
              question: "01. A process is a _______.",
              options: [
                {
                  option: "A. single thread of execution."
                },
                {
                  option: "B. program in the execution",
                  answer: true,
                },
                {
                  option: "C. program in the memory",
                },
                {
                  option: "D. task"
                }
              ]
            },
            {
              questionID: "02",
              question: "02. The word processing feature that catches most random typographical errors and misspellings is known as _____.",
              options: [
                {
                  option: "A. Grammar checker"
                },
                {
                  option: "B. Spell checker",
                  answer: true,
                },
                {
                  option: "C. Word checker",
                },
                {
                  option: "D. None of the these"
                }
              ]
            },
            {
              questionID: "03",
              question: "03. What is smallest unit of the information?",
              options: [
                {
                  option: "A. A bit",
                  answer: true,
                },
                {
                  option: "B. A byte",
                },
                {
                  option: "C. A block",
                },
                {
                  option: "D. A nibble"
                }
              ]
            },
            {
              questionID: "04",
              question: "04. What is the decimal equivalent of the binary number 10111?",
              options: [
                {
                  option: "A. 21"
                },
                {
                  option: "B. 39",
                },
                {
                  option: "C. 42",
                },
                {
                  option: "D. 23",
                  answer: true,
                }
              ]
            },
            {
              questionID: "05",
              question: "05. What is the term for a temporary storage area that compensates for differences in data rate and data flow between devices?",
              options: [
                {
                  option: "A. Buffer",
                  answer: true,
                },
                {
                  option: "B. Bus",
                },
                {
                  option: "C. Channel",
                },
                {
                  option: "D. Modem"
                }
              ]
            },
            {
              questionID: "06",
              question: "06. How many color dots make up one color pixel on a screen?",
              options: [
                {
                  option: "A. 265"
                },
                {
                  option: "B. 16",
                },
                {
                  option: "C. 8",
                },
                {
                  option: "D. 3",
                  answer: true,
                }
              ]
            },
            {
              questionID: "07",
              question: "07. How is the data stored on the diskette?",
              options: [
                {
                  option: "A. Ink"
                },
                {
                  option: "B. Laser bubbles",
                },
                {
                  option: "C. Magnetism",
                  answer: true,
                },
                {
                  option: "D. Circuits"
                }
              ]
            },
            {
              questionID: "08",
              question: "08. Which of the following is the smallest visual element on a video monitor?",
              options: [
                {
                  option: "A. Character"
                },
                {
                  option: "B. Pixel",
                  answer: true,
                },
                {
                  option: "C. Byte",
                },
                {
                  option: "D. Bit"
                }
              ]
            },
            {
              questionID: "09",
              question: "09. Which of the following programs enables you to calculate numbers related to rows and columns?",
              options: [
                {
                  option: "A. Window program"
                },
                {
                  option: "B. Spreadsheet program",
                  answer: true,
                },
                {
                  option: "C. Graphics program",
                },
                {
                  option: "D. Word program"
                }
              ]
            },
            {
              questionID: "10",
              question: "10. Which of the following is an output device?",
              options: [
                {
                  option: "A. Keyboard"
                },
                {
                  option: "B. Mouse",
                },
                {
                  option: "C. Light pen",
                },
                {
                  option: "D. VDU",
                  answer: true,
                }
              ]
            },
            {
              questionID: "11",
              question: "11. Which of the following is an input device?",
              options: [
                {
                  option: "A. Plotter"
                },
                {
                  option: "B. Printer",
                },
                {
                  option: "C. VDU",
                },
                {
                  option: "D. Mouse",
                  answer: true,
                }
              ]
            },
            {
              questionID: "12",
              question: "12. BIOS is used ",
              options: [
                {
                  option: "A. By operating system",
                  answer: true,
                },
                {
                  option: "B. By compiler",
                },
                {
                  option: "C. By interpreter",
                },
                {
                  option: "D. By application software"
                }
              ]
            },
            {
              questionID: "13",
              question: "13. What is the mean of the Booting in the system?",
              options: [
                {
                  option: "A. Restarting computer",
                  answer: true,
                },
                {
                  option: "B. Install the program",
                },
                {
                  option: "C. To scan",
                },
                {
                  option: "D. To turn off	"
                }
              ]
            },
            {
              questionID: "14",
              question: "14. The central processing unit is located in the_____________",
              options: [
                {
                  option: "A. Hard disk"
                },
                {
                  option: "B. System unit",
                  answer: true,
                },
                {
                  option: "C. Memory unit",
                },
                {
                  option: "D. Monitor	"
                }
              ]
            },
            {
              questionID: "15",
              question: "15. Which of the following is equal to a gigabyte?",
              options: [
                {
                  option: "A. 1024 bytes"
                },
                {
                  option: "B. 512 GB",
                },
                {
                  option: "C. 1024 megabytes",
                  answer: true,
                },
                {
                  option: "D. 1024 bits"
                }
              ]
            },
            {
              questionID: "16",
              question: "16. How many bytes does 4 kilobytes represent?",
              options: [
                {
                  option: "A. 512"
                },
                {
                  option: "B. 1024",
                },
                {
                  option: "C. 4096",
                  answer: true,
                },
                {
                  option: "D. 8192"
                }
              ]
            },
            {
              questionID: "17",
              question: "17. Which type of program acts as an intermediary between a user of a computer and the computer hardware?",
              options: [
                {
                  option: "A. Operating system",
                  answer: true,
                },
                {
                  option: "B. User thread",
                },
                {
                  option: "C. Superuser thread",
                },
                {
                  option: "D. Application program"
                }
              ]
            },
            {
              questionID: "18",
              question: "18. Which of the following is not an operating system?",
              options: [
                {
                  option: "A. Windows"
                },
                {
                  option: "B. Linux",
                },
                {
                  option: "C. Oracle",
                  answer: true,
                },
                {
                  option: "D. DOS	"
                }
              ]
            },
            {
              questionID: "19",
              question: "19. What is the maximum length of the filename in DOS?",
              options: [
                {
                  option: "A. 4"
                },
                {
                  option: "B. 5",
                },
                {
                  option: "C. 8",
                  answer: true,
                },
                {
                  option: "D. 12"
                }
              ]
            },
            {
              questionID: "20",
              question: "20. What else is a command interpreter called?",
              options: [
                {
                  option: "A. prompt"
                },
                {
                  option: "B. kernel",
                  answer: true,
                },
                {
                  option: "C. shell",
                },
                {
                  option: "D.  command"
                }
              ]
            },
          ]
        },
        {
          paperSetID: "02",
          paperSetCode: "CAR02",
          paperSetName: "CAR-SET-2",
          paperName: "Computer Application in Research",
          questions: [
            {
              questionID: "01",
              question: "01. What is the full name of FAT?",
              options: [
                {
                  option: "A. File attribute table"
                },
                {
                  option: "B. File allocation table",
                  answer: true,
                },
                {
                  option: "C. Font attribute table",
                },
                {
                  option: "D. Format allocation table"
                }
              ]
            },
            {
              questionID: "02",
              question: "02. When does page fault occur?",
              options: [
                {
                  option: "A. The page is present in memory."
                },
                {
                  option: "B. The deadlock occurs.",
                },
                {
                  option: "C. The page does not present in memory.",
                  answer: true,
                },
                {
                  option: "D. The buffering occurs."
                }
              ]
            },
            {
              questionID: "03",
              question: "03. Banker's algorithm is used?",
              options: [
                {
                  option: "A. To prevent deadlock",
                  answer: true,
                },
                {
                  option: "B. To deadlock recovery",
                },
                {
                  option: "C. To solve the deadlock",
                },
                {
                  option: "D. None of these"
                }
              ]
            },
            {
              questionID: "04",
              question: "04. Which is the Linux operating system?",
              options: [
                {
                  option: "A. Private operating system"
                },
                {
                  option: "B. Windows operating system",
                },
                {
                  option: "C. Open-source operating system",
                  answer: true,
                },
                {
                  option: "D. None of these",
                }
              ]
            },
            {
              questionID: "05",
              question: "05. What is the full name of the IDL?",
              options: [
                {
                  option: "A. Interface definition language",
                  answer: true,
                },
                {
                  option: "B. Interface direct language ",
                },
                {
                  option: "C. Interface data library",
                },
                {
                  option: "D. None of these"
                }
              ]
            },
            {
              questionID: "06",
              question: "06. A computer network permits sharing of",
              options: [
                {
                  option: "A. Resources"
                },
                {
                  option: "B. Information",
                },
                {
                  option: "C. Both a and b",
                  answer: true,
                },
                {
                  option: "D. None of these",
                }
              ]
            },
            {
              questionID: "07",
              question: "07. The first operational computer network in the world was the _________ for the United States Department of Defense",
              options: [
                {
                  option: "A. ARPANET",
                  answer: true,
                },
                {
                  option: "B. ERNET",
                },
                {
                  option: "C. SKYNET",
                },
                {
                  option: "D. DARPANET"
                }
              ]
            },
            {
              questionID: "08",
              question: "08. ATM stands for",
              options: [
                {
                  option: "A. Automatic taller machine"
                },
                {
                  option: "B. Automated teller machine",
                  answer: true,
                },
                {
                  option: "C. Automatic transfer machine",
                },
                {
                  option: "D. Automated transfer machine"
                }
              ]
            },
            {
              questionID: "09",
              question: "09. ____________is the technology that connects the machines and people within a site in a small area",
              options: [
                {
                  option: "A. LAN",
                  answer: true,
                },
                {
                  option: "B. MAN",
                },
                {
                  option: "C. WAN",
                },
                {
                  option: "D. None of these"
                }
              ]
            },
            {
              questionID: "10",
              question: "10.  ______________is a network that covers geographic areas that are larger, such as districts or cities",
              options: [
                {
                  option: "A. LAN"
                },
                {
                  option: "B. MAN",
                  answer: true,
                },
                {
                  option: "C. WAN",
                },
                {
                  option: "D. None of these",
                }
              ]
            },
            {
              questionID: "11",
              question: "11. _______is a network that this technology connects sites that are in diverse locations",
              options: [
                {
                  option: "A. LAN"
                },
                {
                  option: "B. MAN",
                },
                {
                  option: "C. WAN",
                  answer: true,
                },
                {
                  option: "D. None of these",
                }
              ]
            },
            {
              questionID: "12",
              question: "12. _________is a collection of point-to-point links that may form a circle",
              options: [
                {
                  option: "A. LAN",
                },
                {
                  option: "B. MAN",
                },
                {
                  option: "C. WAN",
                },
                {
                  option: "D. Ring topology",
                  answer: true,
                }
              ]
            },
            {
              questionID: "13",
              question: "13. The ISDN Internetworking Equipment devices are",
              options: [
                {
                  option: "A. Terminal Adapters(TAs)",
                },
                {
                  option: "B. ISDN Bridges",
                },
                {
                  option: "C. ISDN Routers",
                },
                {
                  option: "D. All of these",
                  answer: true,
                }
              ]
            },
            {
              questionID: "14",
              question: "14. ATM networks are",
              options: [
                {
                  option: "A. connectionless"
                },
                {
                  option: "B. Interconnected",
                },
                {
                  option: "C. connection oriented",
                  answer: true,
                },
                {
                  option: "D. None of these"
                }
              ]
            },
            {
              questionID: "15",
              question: "15. DHCP stands for",
              options: [
                {
                  option: "A. Dynamic Host Configuration Protocol",
                  answer: true,
                },
                {
                  option: "B. Digital Host Communication Provider",
                },
                {
                  option: "C. Digital Host Communication Protocol",
                },
                {
                  option: "D. Dynamic Host Configuration Provider"
                }
              ]
            },
            {
              questionID: "16",
              question: "16. Which protocol layer uses the protocols are WWW, HTTP, FTP, SMTP, e-mail etc",
              options: [
                {
                  option: "A. Application Layer Protocol",
                  answer: true,
                },
                {
                  option: "B. Transport Layer Protocol",
                },
                {
                  option: "C. Internet Layer Protocol",
                },
                {
                  option: "D. Hardware Layer"
                }
              ]
            },
            {
              questionID: "17",
              question: "17. The internetworking protocol is known as",
              options: [
                {
                  option: "A. SMTP",
                },
                {
                  option: "B. PPP",
                },
                {
                  option: "C. TCP/IP",
                  answer: true,
                },
                {
                  option: "D. NNTP"
                }
              ]
            },
            {
              questionID: "18",
              question: "18. If single computer network is divided into segments and router are added between them it forms an",
              options: [
                {
                  option: "A. Internet"
                },
                {
                  option: "B. Internetwork",
                  answer: true,
                },
                {
                  option: "C. Network",
                },
                {
                  option: "D. Internetworking"
                }
              ]
            },
            {
              questionID: "19",
              question: "19. Check sum is used for",
              options: [
                {
                  option: "A. Error correction"
                },
                {
                  option: "B. Error detection",
                  answer: true,
                },
                {
                  option: "C. Both a and b ",
                },
                {
                  option: "D. None of these"
                }
              ]
            },
            {
              questionID: "20",
              question: "20. The type of packet format supported by X.25 are as follows",
              options: [
                {
                  option: "A. Control packet"
                },
                {
                  option: "B. Data packet",
                },
                {
                  option: "C. Both a and b",
                  answer: true,
                },
                {
                  option: "D. None of these"
                }
              ]
            },
          ]
        },
      ],
    },

  ]


  // ATTEMPT

  attempt: any = [];
  attemptCount = 1;

  title: any = 'MCQ';
  dash: boolean = true;
  assSelection: boolean = false;
  paperSelection: boolean = false;
  quizSelection: boolean = false;
  resultSelection: boolean = false;

  userOptedAnswer: any = [];
  rm: boolean = false;
  rpe: boolean = false;
  car: boolean = false;
  setBgTrue: boolean = true;



  resultPercent: any = 0;

  myInterval: any;

  quizSubmit: boolean = false;

  mm: number = 0;
  mmStr: any = '00';
  Timer: number = 0;
  quizTimer: any = '00';
  questionTimer = 20000 / 1000;
  quesTimer: any = '00';
  counter: number = 0;
  active: any = "#0277b7";
  SelectedSubject: any = [];
  loadSubject: any = [];
  loadQuizQuestion: any = [];
  checkTrue = '';
  // userOptedAnswer: any = [];
  // rm: boolean = false;
  // rpe: boolean = false;
  // car: boolean = false;
  // setBgTrue: boolean = true;

  viewAnswer: any;

  isQuizDisplay: boolean = false;
  isStartQuiz: boolean = true;
  congratWdgt: boolean = false;
  isQuizShow: boolean = true;
  isQuizStart: boolean = false;


  paperSet: any = [];
  UserSelectedAnswer: any = [];
  reAssment: any = [];
  rightAnswer: any = [];
  progress: number = 0;
  progressStr = '';

  isLearnBlock = false;


  totalTimeCount: number = 0;

  isShowTestScore: boolean = false;


  mcqTestForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {


    this.setForm();
    this.getTime();
    this.getTimer();
  }

  setForm() {

    this.mcqTestForm = new FormGroup({
      OPT: new FormControl(''),


    })
  }
  sb() {

  }


  getSubject(id: any) {

    if (!this.isQuizStart) {
      this.isQuizDisplay = false;
      this.isStartQuiz = true;
      this.counter = 0;
      this.active = "#0277b7"
      // console.log(id);
      this.loadSubject = [];
      let object = this.subject.find((item: { subjectCode: any; }) => item.subjectCode == id)

      this.paperSet = object?.paperSet;
      this.SelectedSubject = object;
      // console.log("this is paper set", this.paperSet)
      this.rm = false;
      this.rpe = false;
      this.car = false;
      if (id == 'CW01') {
        this.rm = true;

      } else if (id == 'CW02') {
        this.rpe = true;
      } else if (id == 'CW03') {
        this.car = true;
      }
    } else {
      alert("You have already Started Assesment")
    }

  }

  getValue(event: any, ques: any) {


    // console.log(event, ques)

    let result = {
      question: ques,
      answer: event
    }

    this.UserSelectedAnswer.push(result);


    if (this.loadQuizQuestion[this.counter].options[event].answer == true) {


      this.rightAnswer.push(this.loadQuizQuestion[this.counter]);
    } else {



      this.reAssment.push(this.loadQuizQuestion[this.counter]);
    }


    let answer = {
      question: this.loadSubject.questions[this.counter].question,
      option: event
    }

    this.userOptedAnswer.push(answer);


    setTimeout(() => {

      this.next();
    }, 1000);
  }
  time: any;
  questionInterval: any;
  getTime() {

    this.time = new Date();
    this.questionInterval = interval(1000).subscribe(data => {
      this.time = new Date();

      this.totalTimeCount = this.totalTimeCount + 5;
      this.progressStr = JSON.stringify(this.totalTimeCount) + "%";

      if (this.questionTimer == 0) {
        this.next();
      }


      if (this.questionTimer > 0) {
        this.questionTimer = this.questionTimer - 1;
        this.pad2(this.questionTimer)
      }
    })
  }

  pad2(number: number) {

    return this.quesTimer = (number < 10 ? '0' : '') + number;

  }


  quizInterval: any;
  getTimer() {

    this.time = new Date();




    this.quizInterval = interval(1000).subscribe(data => {
      // console.log("data",data);
      this.time = new Date();
      if (this.isQuizStart == true) {
        // console.log("inner loop of timer")
        if (this.Timer < 60) {
          this.Timer = this.Timer + 1;
          this.pad3(this.Timer)
          // console.log(this.Timer);
        } else {
          this.Timer = 0;
          this.mm = this.mm + 1;
          this.pad4(this.mm)
        }

      } else {
        // console.log("Timeout")
        this.quizInterval.unsubscribe();
      }

    })

  }
  pad3(number: number) {

    return this.quizTimer = (number < 10 ? '0' : '') + number;

  }
  pad4(number: number) {

    return this.mmStr = (number < 10 ? '0' : '') + number;

  }

  getSet(event: any) {
    this.counter = 0;
    this.reAssment = [];
    // this.isShowTestScore = false;
    this.isLearnBlock = false;
    this.isStartQuiz = true;
    // this.isQuizShow = false;
    this.isQuizDisplay = false;
    if (!this.isQuizStart) {
      this.checkTrue = event;
      this.loadSubject = this.paperSet.find((item: { paperSetCode: any; }) => item.paperSetCode == event);
      this.loadQuizQuestion = this.loadSubject.questions;
      console.log(this.loadQuizQuestion);
    } else {
      alert("You have already Startd your Assesment")
    }
  }



  mcqStart(e: any) {
    console.log(e)
    if (e == 'start') {
      this.dash = false;
      this.assSelection = true;
    } else if (e == 'assSelection') {
      this.assSelection = false;
      this.paperSelection = true;
    } else if (e == 'paperSelection') {
      this.quizSelection = true;
      this.paperSelection = false;
    } else if (e == 'resultSelection') {
      this.resultSelection = true;
      this.quizSelection = false;
    }
  }

  back(e: any) {
    // console.log(e);
    if (e == 'assSelection') {
      this.assSelection = false;
      this.dash = true;
    } else if (e == 'paperSelection') {
      this.assSelection = true;
      this.paperSelection = false;
    } else if (e == 'quizSelection') {
      this.quizSelection = false;
      this.paperSelection = true;
    }
  }


  startQuiz() {
    this.active = "#0277b7"

    if (this.loadSubject.length <= 0) {

      return alert("Please Select paper set");
    }

    this.quizSubmit = false;

    this.isQuizStart = true;
    this.isQuizDisplay = true;
    this.isStartQuiz = false;

    this.congratWdgt = false;
    this.isQuizShow = true;
    this.isShowTestScore = false;

    this.Timer = 0;
    this.quizTimer = '00';

    this.questionTimer = 20000 / 1000;
    this.quesTimer = '00';

    this.getTime();
    this.getTimer();
  }

  next() {
    this.mcqTestForm.reset();
    let len = this.loadSubject.questions.length;

    if (this.counter < len - 1) {
      this.questionTimer = 20000 / 1000;
      this.counter = this.counter + 1;
      // console.log(this.counter)
      this.totalTimeCount = 0;
      let progressPercent = this.counter + 1;

      this.progress = (progressPercent * 100) / this.loadSubject.questions.length;
      // this.progressStr = JSON.stringify(this.progress) + "%";

    } else {
      this.counter = len - 1;
      this.active = "darkgrey"
      this.questionTimer = 0;
      this.quesTimer = "00";
      // this.SubmitQuiz();
    }
  }

  showLearnBlock() {
    this.congratWdgt = false;
    this.isLearnBlock = true;


  }


  resultPercentStr = '';
  SubmitQuiz() {
    this.resultPercent = 0;
    this.isQuizStart = false;
    this.congratWdgt = true;
    this.isQuizShow = false;
    this.isShowTestScore = true;
    this.quizSubmit = true;
    this.resultPercent = (this.rightAnswer.length * 100) / this.loadSubject.questions.length;
    this.resultPercentStr = JSON.stringify(this.resultPercent) + "%";


    let attemptResult = {
      count: this.attemptCount,
      rightAnswer: this.rightAnswer.length,
      wrongAnswer: this.reAssment.length,
      totalQuestion: this.loadSubject.questions.length
    }
    this.attemptCount = this.attemptCount + 1;

    this.attempt.push(attemptResult);

    console.log(this.attempt);

    this.questionInterval.unsubscribe();

  }
  exit() {
    this.isQuizStart = false;
    this.isQuizDisplay = false;
    this.isStartQuiz = false;
  
    this.Timer = 0;
    this.quizTimer = '00';

    this.quizInterval.unsubscribe();
    this.questionInterval.unsubscribe();
  }


  getQuestionID(id: any) {

    this.viewAnswer = this.loadQuizQuestion.find((item: { questionID: any; }) => item.questionID == id)

  }
}
