import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synopsis-index-sample',
  templateUrl: './synopsis-index-sample.component.html',
  styleUrls: ['./synopsis-index-sample.component.scss']
})
export class SynopsisIndexSampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
