import { Component, OnInit } from '@angular/core';
import { ResearchRepoService } from 'src/app/services/research-repo.service';

@Component({
  selector: 'app-ex-res-repo',
  templateUrl: './ex-res-repo.component.html',
  styleUrls: ['./ex-res-repo.component.scss']
})
export class ExResRepoComponent implements OnInit {

  dataList: any;


  repoList: any;
  constructor(
    private service: ResearchRepoService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.getPhdRepodata();
  }

  getPhdRepodata() {
    this.service.getAllPhdRepoDataService().subscribe((result) => {
      this.repoList = result;
      console.log(this.repoList)

      this.dataList = result;
    })
  }
}
