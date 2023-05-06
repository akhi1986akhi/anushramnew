import { Component, OnInit } from '@angular/core';
import { MentorRegistrationService } from 'src/app/services/mentor-registration.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-view-all-mentors',
  templateUrl: './view-all-mentors.component.html',
  styleUrls: ['./view-all-mentors.component.scss']
})
export class ViewAllMentorsComponent implements OnInit {
  data:any;
  expertsList: any;
  stateList: any = [];
  cityList: any = [];
  departmentList: any = [];
  constructor(private service: MentorRegistrationService) { }

  ngOnInit(): void {
    this.getResumeData()
  }


  getResumeData() {
    this.service.getResumeOceanMentorService().subscribe((result) => {
      this.expertsList = result;
      this.data=result;


      let setState = new Set();
      let setCity = new Set();
      let setDepartment = new Set();

      for (let i = 0; i < this.expertsList.length; i++) {
        if (
          this.expertsList[i].profile.state != ''
          &&
          this.expertsList[i].profile.state != undefined
          &&
          this.expertsList[i].profile.state != null
        ) {


          // this.stateList.push(this.expertsList[i].profile.state)


          setState.add(this.expertsList[i].profile.state);


        }
        if (
          this.expertsList[i].profile.city != ''
          &&
          this.expertsList[i].profile.city != undefined
          &&
          this.expertsList[i].profile.city != null
        ) {

          // this.cityList.push(this.expertsList[i].profile.city)
          setCity.add(this.expertsList[i].profile.city);

        }

        if (
          this.expertsList[i].profile.department != ''
          &&
          this.expertsList[i].profile.department != undefined
          &&
          this.expertsList[i].profile.department != null
        ) {


          // this.departmentList.push(this.expertsList[i].profile.department)
          setDepartment.add(this.expertsList[i].profile.department);

        }
      }


      this.stateList = [...setState];
      this.cityList = [...setCity];
      this.departmentList = [...setDepartment];
 

      // this.expertsList = this.stateList.filter((item: string)=> item != '');
      // console.log(this.stateList, "list")
    })
  }


  filter(e: any, f: any) {
    console.log(e, f)

    if (f == 'state') {

      let expListBystate=[];
      for (let i = 0; i < this.data.length; i++) {
        if (
          this.data[i].profile.state != ''
          &&
          this.data[i].profile.state != undefined
          &&
          this.data[i].profile.state != null
        ) {


          
          // this.stateList.push(this.expertsList[i].profile.state)

          if(this.data[i].profile.state == e){
            expListBystate.push(this.data[i])
          }
   


        }
        

        
      }




      this.expertsList=[];
      this.expertsList=expListBystate

    }
  }
}
