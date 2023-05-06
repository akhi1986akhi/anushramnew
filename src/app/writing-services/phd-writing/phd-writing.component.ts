import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnushramService } from 'src/app/services/anushram.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-phd-writing',
  templateUrl: './phd-writing.component.html',
  styleUrls: ['./phd-writing.component.scss']
})
export class PhdWritingComponent implements OnInit {
  stateList:any;
  WEForm!:FormGroup;
  constructor(
    private state:StateService,
    private service:AnushramService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getState();
    this.setWEForm();
  }

  setWEForm(){
    this.WEForm= new FormGroup({
      fullName:new FormControl(''),
      email:new FormControl(''),
      contact: new FormControl(''),
      subject:new FormControl(''),
      state: new FormControl('State'),
      service: new FormControl('Select Research Work'),
      message: new FormControl('')
    })
  }
getState(){
  this.state.getStateService().subscribe((result)=>{
    this.stateList=result;
    console.log(this.stateList)
  })
}

submitWEForm(){
  console.log(this.WEForm.value);
  this.service.putAnushramWrEnqService(this.WEForm.value).subscribe((result:any)=>{
    console.log(result);
    if(result.status=='success'){
      this.WEForm.reset();
      this.navigate();
      alert(result.msg);
    }
  })
}

navigate(){
  this.router.navigate(['/success/writing-service'])
  localStorage.setItem("writing","success")
}
}
