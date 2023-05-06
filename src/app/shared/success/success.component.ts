import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  writing:boolean=false;
  constructor(
    private actRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    let params= this.actRoute.snapshot.paramMap.get('id');
    console.log(params)
    if(localStorage.getItem('writing')=='success'){
      console.log(localStorage.getItem('writing'));
    }else{
      this.router.navigate(['/'])

    }
    if(params=='writing-service'){
      this.writing=true;
    }
    const myTimeout = setTimeout(this.autoRedirect.bind(this), 15000);
   
  }
ngOnDestroy():void{
  localStorage.removeItem("writing");
}


autoRedirect():void{
  this.router.navigate(['/']);
}


myGreeting() {
  this.router.navigate(['/contact']);

}
}
