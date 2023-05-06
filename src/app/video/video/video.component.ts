import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhdService } from 'src/app/services/phd.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @ViewChild('video')

  public video: ElementRef
    // @ViewChild('video',{
    //   static:false
    // })el!:ElementRef
    | undefined

  // @ViewChild('video',{
  //   static:false
  // })el!:ElementRef


  data: any;
  videoUrl:any;
  videoTitle:any;
  // https://asthadigital.s3.ap-south-1.amazonaws.com/anushram2.0/video/stagetwo/why-course-work-is-important.mp4

  constructor(
    private router: ActivatedRoute,
    private phdSer: PhdService
  ) { }

  ngOnInit(): void {

    let id = this.router.snapshot.paramMap.get('id');
 

    this.getData(id);
    // console.log('id is ', id);
  }
  onRightClick() {
    return false;
  }

  getData(id: any) {
    this.phdSer.getPhdDatabyIDService(id).subscribe((result: any) => {

      this.data = result.result;
      console.log(this.data)

      this.videoUrl=this.data.video[0].videoUrl
    	this.videoTitle=this.data.video[0].videoTitle
  
      // console.log(this.videoUrl)


    })
  }
}
