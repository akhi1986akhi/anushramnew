import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-of-interest',
  templateUrl: './area-of-interest.component.html',
  styleUrls: ['./area-of-interest.component.scss']
})
export class AreaOfInterestComponent implements OnInit {
  spinner:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
