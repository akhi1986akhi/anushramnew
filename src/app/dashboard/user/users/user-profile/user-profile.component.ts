import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnushramService } from 'src/app/services/anushram.service';
import { StateService } from 'src/app/services/state.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  stateList: any;
  File:any;
  year: any = [];
  edu: boolean = false;
  emp: boolean = false;
  abt: boolean = false;

  updateBtn:boolean=false;
  updateBtnEmp:boolean=false;
  activeUser: any;
  constructor(private state: StateService,
     private update: UserDataService,
     private service:AnushramService
     ) { }

  basicInfoForm!: FormGroup;
  EducationForm!: FormGroup;
  EmploymentForm!: FormGroup;
  aboutForm!: FormGroup;
  educationData: any;
  employmentData: any;
  userData: any;

  ngOnInit(): void {
    this.getUserData();
    this.getState();
    this.setEducationForm();

    for (let i = 1960; i <= 2022; i++) {
      this.year.push(i);
    }


    let user = JSON.stringify(localStorage.getItem('user'));
    this.activeUser = JSON.parse(JSON.parse(user));

    this.setbasicInfoForm();
    this.setEmploymentForm();
    this.setAboutForm();
  }

  setbasicInfoForm() {
    this.basicInfoForm = new FormGroup({
      title: new FormControl('Title'),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dob: new FormControl(''),
      fatherName: new FormControl(''),
      motherName: new FormControl(''),
      email: new FormControl(this.activeUser.email),
      contact: new FormControl(''),
      altContact: new FormControl(''),

      addressA: new FormControl(''),
      cityA: new FormControl(''),
      stateA: new FormControl('Select State'),
      pincodeA: new FormControl(''),

      addressB: new FormControl(''),
      cityB: new FormControl(''),
      stateB: new FormControl('Select State'),
      pincodeB: new FormControl(''),

    })
  }

  setEducationForm() {
    this.EducationForm = new FormGroup({
      course: new FormControl(''),
      spec: new FormControl(''),
      maxMarks: new FormControl(''),
      obtMarks: new FormControl(''),
      boUni: new FormControl(''),
      year: new FormControl('Select Year'),
      location: new FormControl('')

    })
  }
  setEmploymentForm() {
    this.EmploymentForm = new FormGroup({
      organization: new FormControl(''),
      post: new FormControl(''),
      role: new FormControl(''),
      responsbility: new FormControl(''),
      joiningDate: new FormControl(''),
      lastDate: new FormControl(''),
      description: new FormControl('')
    })
  }

  setAboutForm() {
    this.aboutForm = new FormGroup({
      aboutme: new FormControl(''),
      universityName: new FormControl(''),
      researchTitle: new FormControl(''),
      universityDepartment: new FormControl(''),
      subject: new FormControl('')

    })
  }
  getState() {
    this.state.getStateService().subscribe((result) => {
      this.stateList = result;

    })
  }

  // GET USER DATA 

  getUserData() {
    this.update.getUserDataService().subscribe((result: any) => {

      this.educationData = result.education;
      this.employmentData = result.employment;
      this.userData = result;

      // console.log(result.about);
      if (result?.about == undefined) {
        this.abt = true;
      }


      this.aboutForm = new FormGroup({
        aboutme: new FormControl(result?.about?.aboutme),
        universityName: new FormControl(result?.about?.universityName),
        researchTitle: new FormControl(result?.about?.researchTitle),
        universityDepartment: new FormControl(result?.about?.universityDepartment),
        subject: new FormControl(result?.about?.subject)
        


      })
      // console.log(this.employmentData);
      if (result.profile.title == undefined) {
        result.profile.title = 'Title'
      }
      if (result.profile.stateA == undefined) {
        result.profile.stateA = 'Select State'
      }
      if (result.profile.stateB == undefined) {
        result.profile.stateB = 'Select State'
      }
      this.basicInfoForm = new FormGroup({
        title: new FormControl(result.profile.title),
        firstName: new FormControl(result.profile.fname),
        lastName: new FormControl(result.profile.lname),
        dob: new FormControl(result.profile.dob),
        fatherName: new FormControl(result.profile.fatherName),
        motherName: new FormControl(result.profile.motherName),
        email: new FormControl(this.activeUser.email),
        contact: new FormControl(result.profile.contact),
        altContact: new FormControl(result.profile.AltContact),

        addressA: new FormControl(result.profile.addressA),
        cityA: new FormControl(result.profile.cityA),
        stateA: new FormControl(result.profile.stateA),
        pincodeA: new FormControl(result.profile.pincodeA),

        addressB: new FormControl(result.profile.addressB),
        cityB: new FormControl(result.profile.cityB),
        stateB: new FormControl(result.profile.stateB),
        pincodeB: new FormControl(result.profile.pincodeB),

      })


    })
  }


  submitForm(val: any) {


    if (val == 'profile') {


      this.update.updateUserProfileService(this.basicInfoForm.value, val).subscribe((result: any) => {

        if (result.status = 'success') {
          alert(result.msg)
        } else {
          alert("Error..!")
        }
      })
    }
    else if (val == 'education') {

      this.update.updateUserEducationService(this.EducationForm.value, val).subscribe((result: any) => {

        if (result.status = 'success') {
          this.getUserData();
          this.EducationForm.reset();
          alert(result.msg)
          this.edu = false;
        } else {
          alert("Error..!")
        }
      })
    } else if (val == 'employment') {
      // console.log(this.EmploymentForm.value);
      this.update.updateUserEducationService(this.EmploymentForm.value, val).subscribe((result: any) => {
        // console.log(result);
        if (result.status = 'success') {
          this.getUserData();
          this.EmploymentForm.reset();
          alert(result.msg)
          this.edu = false;
        } else {
          alert("Error..!")
        }
      })
    }


  }


  submitAbt() {
    // console.log(this.aboutForm.value);

    let formdata:any = new FormData();

    formdata.append("file",this.File);
    formdata.append("aboutme", this.aboutForm.value.aboutme);
    formdata.append("universityName", this.aboutForm.value.universityName);
    formdata.append("researchTitle", this.aboutForm.value.researchTitle);
    formdata.append("universityDepartment", this.aboutForm.value.universityDepartment);
    formdata.append("subject", this.aboutForm.value.subject);
    // this.aboutForm.value
        
    this.update.updateUserAboutService(formdata, 'about').subscribe((result: any) => {
      if (result.status == 'success') {
        this.abt = false;
        this.getUserData();
        alert("Updated Successfully")

      } else {
        alert("Error..!")
      }
    })
  }

  isChecked: boolean = false;
  address: any = {};
  copyAddress() {



    this.isChecked = !this.isChecked


    if (this.isChecked == true) {

      this.address.title = this.basicInfoForm.value.title;
      this.address.firstName = this.basicInfoForm.value.firstName;
      this.address.lastName = this.basicInfoForm.value.lastName;
      this.address.dob = this.basicInfoForm.value.dob;
      this.address.fatherName = this.basicInfoForm.value.fatherName;
      this.address.motherName = this.basicInfoForm.value.motherName;
      this.address.email = this.basicInfoForm.value.email;
      this.address.contact = this.basicInfoForm.value.contact;
      this.address.altContact = this.basicInfoForm.value.altContact;

      this.address.addressA = this.basicInfoForm.value.addressA;
      this.address.cityA = this.basicInfoForm.value.cityA;
      this.address.stateA = this.basicInfoForm.value.stateA;
      this.address.pincodeA = this.basicInfoForm.value.pincodeA;

      this.address.addressB = this.basicInfoForm.value.addressA;
      this.address.cityB = this.basicInfoForm.value.cityA;
      this.address.stateB = this.basicInfoForm.value.stateA;
      this.address.pincode = this.basicInfoForm.value.pincodeA


      this.basicInfoForm = new FormGroup({

        title: new FormControl(this.address.title),
        firstName: new FormControl(this.address.firstName),
        lastName: new FormControl(this.address.lastName),
        dob: new FormControl(this.address.dob),
        fatherName: new FormControl(this.address.fatherName),
        motherName: new FormControl(this.address.motherName),
        email: new FormControl(this.address.email),
        contact: new FormControl(this.address.contact),
        altContact: new FormControl(this.address.altContact),

        addressA: new FormControl(this.address.addressA),
        cityA: new FormControl(this.address.cityA),
        stateA: new FormControl(this.address.stateA),
        pincodeA: new FormControl(this.address.pincodeA),

        addressB: new FormControl(this.address.addressA),
        cityB: new FormControl(this.address.cityA),
        stateB: new FormControl(this.address.stateA),
        pincodeB: new FormControl(this.address.pincodeA),
      })
    } else if (this.isChecked == false) {
      this.basicInfoForm = new FormGroup({

        title: new FormControl(this.address.title),
        firstName: new FormControl(this.address.firstName),
        lastName: new FormControl(this.address.lastName),
        dob: new FormControl(this.address.dob),
        fatherName: new FormControl(this.address.fatherName),
        motherName: new FormControl(this.address.motherName),
        email: new FormControl(this.address.email),
        contact: new FormControl(this.address.contact),
        altContact: new FormControl(this.address.altContact),

        addressA: new FormControl(this.address.addressA),
        cityA: new FormControl(this.address.cityA),
        stateA: new FormControl(this.address.stateA),
        pincodeA: new FormControl(this.address.pincodeA),
        addressB: new FormControl(''),
        cityB: new FormControl(''),
        stateB: new FormControl(''),
        pincodeB: new FormControl(''),
      })
    }
  }


  AddEducation() {
    this.edu = true;
    this.updateBtn=false;
    this.EducationForm.reset();
  }

  AddEmployment() {
    this.emp = true;
    this.updateBtnEmp=false;
    this.EmploymentForm.reset();
  }
  AddAbt() {
    this.abt = true;
  }
  close(e: any) {

    if (e == 'edu-form') {
      this.edu = false;
    } else if (e == 'emp-form') {
      this.emp = false;
    } else if (e == 'abt-form') {
      this.abt = false;
    }
  }


  edit(e: any, i: any) {
    // console.log(e, i)

    if (e == 'education') {
      // console.log(this.educationData);   
      this.edu=true;  
      this.updateBtn=true;
      this.EducationForm = new FormGroup({
        id: new FormControl(this.educationData[i]._id),
        course: new FormControl(this.educationData[i].course),
        spec: new FormControl(this.educationData[i].spec),
        maxMarks: new FormControl(this.educationData[i].maxMarks),
        obtMarks: new FormControl(this.educationData[i].obtMarks),
        boUni: new FormControl(this.educationData[i].boUni),
        year: new FormControl(this.educationData[i].year),
        location: new FormControl(this.educationData[i].location)

      })

    } else if (e == 'employment') {
      // console.log("employment");

      this.emp=true;
      this.updateBtnEmp=true;

      this.EmploymentForm = new FormGroup({
        id: new FormControl(this.employmentData[i]._id),
        organization: new FormControl(this.employmentData[i].organization),
        post: new FormControl(this.employmentData[i].post),
        role: new FormControl(this.employmentData[i].role),
        responsbility: new FormControl(this.employmentData[i].responsbility),
        joiningDate: new FormControl(this.employmentData[i].joiningDate),
        lastDate: new FormControl(this.employmentData[i].lastDate),
        description: new FormControl(this.employmentData[i].description)
      });

    }
  }


  updateForm(e: any) {
    if (e == 'education') {
      // console.log(e);
      // console.log(this.EducationForm.value)
      this.service.editAnushramProfileService(this.EducationForm.value,'education').subscribe((result:any)=>{
        // console.log("updated",result)
        if(result.status=='success'){
          this.getUserData();
          alert(result.msg);
          this.edu=false;
        }else{
          alert('Error..!')
        }
      })
    }else if(e=='employment'){
      // console.log(e);
      // console.log(this.EmploymentForm.value);

      this.service.editAnushramProfileService(this.EmploymentForm.value,'employment').subscribe((result:any)=>{
        // console.log("updated",result)
        if(result.status=='success'){
          this.getUserData();
          alert(result.msg);
          this.emp=false;
        }else{
          alert('Error..!')
        }
      })
    }
  }


  uploadFile(e:any){
    // console.log(e.target.files[0])
    this.File=e.target.files[0];
  }
}
