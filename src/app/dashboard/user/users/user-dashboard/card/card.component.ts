import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubsriptionService } from 'src/app/services/subsription.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  userData: any;
  Data: any;
  btn: boolean = false;
  stageOne:boolean=false;
  stageTwo:boolean=false;
  stageThree:boolean=false;
  packageForm!: FormGroup;
  subscription: any = [
    { subscriptionName: 'stageOne', price: 2500, approved:false },
    { subscriptionName: 'stageTwo', price: 2500, approved:false },
    { subscriptionName: 'stageThree', price: 2500, approved:false }
  ];
  Total = 799;
  userSubsription:any;
  constructor(
    private userService: UserDataService,
    private subService: SubsriptionService,
    private router:Router
  ) { }

  ngOnInit(): void {


    let user = JSON.stringify(localStorage.getItem('user'));
    let Data = JSON.parse(JSON.parse(user));
 
    // console.log(Data,"user data");


    this.getUserData();
    this.getSubscriptionData(Data.email)


    for (let j = 0; j < this.subscription.length; j++) {
      this.Total = this.Total + this.subscription[j].price
    }

    if (this.subscription.length == 3) {
      this.Total = this.Total - (this.Total * 25) / 100;

    }

    if (localStorage.getItem('user')) {

      let val = JSON.stringify(localStorage.getItem('user'));
      this.Data = JSON.parse(JSON.parse(val));

      // console.log(this.Data)
    }

    this.setPackageForm();
  }

  setPackageForm() {
    this.packageForm = new FormGroup({

      firstName: new FormControl(this.Data.fname),
      lastName: new FormControl(this.Data.lname),
      email: new FormControl(this.Data.email),
      contact: new FormControl(''),
      subscription: new FormControl(''),
      discountApplied: new FormControl('25'),
      annualCharges: new FormControl('799')
    })


  }
  getUserData() {
    this.userService.getUserDataService().subscribe((result) => {
      // console.log(result)
      this.userData = result;
      // console.log(this.userData)
    })
  }

  navigateToStage(e: any) {
    let query=e;
      this.router.navigate([`/user-dash/phd/${query}`])
    
  
  }

  submitForm() {
    // console.log(this.packageForm.value)
    this.packageForm.value.subcription = this.subscription;
    // console.log(this.packageForm.value)

    if (this.packageForm.value.contact.length > 9 && this.packageForm.value.contact.length < 13) {
      this.subService.postSubscriptionService(this.packageForm.value).subscribe((result) => {
        // console.log(result);
      })
    } else {
      return alert("please fill Contact No.")
    }
  }

  checkOption(e: any, val: any) {
    // console.log(e.target.value)
    // console.log(val)

    if (val == 'stageOne') {
      if (e.target.checked) {
        // console.log("check")
        let data = {
          subscriptionName: val,
          price: 2500
        }
        this.subscription.push(data)
        // console.log(this.subscription)
        this.total('inc');
      } else {
        // console.log('uncheck')
        this.subscription = this.subscription.filter((item: { subscriptionName: any; }) => item.subscriptionName != val)
        // console.log(this.subscription);
        this.total('dec');
      }
    } else if (val == 'stageTwo') {
      if (e.target.checked) {
        // console.log("check")
        let data = {
          subscriptionName: val,
          price: 2500
        }
        this.subscription.push(data)
        // console.log(this.subscription)
        this.total('inc');
      } else {
        // console.log('uncheck')
        this.subscription = this.subscription.filter((item: { subscriptionName: any; }) => item.subscriptionName != val)
        // console.log(this.subscription);
        this.total('dec');
      }
    } else if (val == 'stageThree') {
      if (e.target.checked) {
        // console.log("check")
        let data = {
          subscriptionName: val,
          price: 2500
        }
        this.subscription.push(data)
        // console.log(this.subscription)
        this.total('inc');
      } else {
        // console.log('uncheck')
        this.subscription = this.subscription.filter((item: { subscriptionName: any; }) => item.subscriptionName != val)
        // console.log(this.subscription);
        // this.total('dec');
      }
    }


    // console.log(this.Total)
    if (this.subscription.length == 3) {
      this.Total = this.Total - (this.Total * 25) / 100;

    } else {
      if (this.subscription.length == 0) {
        this.Total = 799;
      } else if (this.subscription.length == 1) {
        this.Total = 799 + 2500;
      } else if (this.subscription.length == 2) {
        this.Total = 799 + 2500 + 2500;
      } else if (this.subscription.length == 3) {
        this.Total = 6224.25
      }
    }

  }

  total(e: any) {
    if (e == 'inc') {

      this.Total = this.Total + 2500;
    } else if (e = 'dec') {
      this.Total = this.Total - 2500;
    }

  }


  getSubscriptionData(email:any){



    // console.log(email)
    this.subService.getSubscriptionByEmailService(email).subscribe((result:any)=>{
      // console.log(result);
      this.userSubsription=result[0];
     let dataOne= this.userSubsription?.subscription.filter((item: { subscriptionName: string; })=> item.subscriptionName=='stageOne');
     for(let i=0; i< this.userSubsription?.subscription.length;i++){

      if(this.userSubsription.subscription[i].subscriptionName=='stageOne'){

        if(this.userSubsription.subscription[i].approved==true){
          this.stageOne=true;
        }
      }else if(this.userSubsription.subscription[i].subscriptionName=='stageTwo'){
 
        if(this.userSubsription.subscription[i].approved==true){
          this.stageTwo=true;
        }
      }else if(this.userSubsription.subscription[i].subscriptionName=='stageThree'){
        if(this.userSubsription.subscription[i].approved==true){
          this.stageThree=true;
      
        }
      }
     }
    })
  }
}
