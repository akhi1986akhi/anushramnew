import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoBlogService } from 'src/app/services/video-blog.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {



  title:String='';
  vid1:boolean=false;
  vid2:boolean=false;
  vid3:boolean=false;
  vid4:boolean=false;
  vid5:boolean=false;
  vid6:boolean=false;
  vid7:boolean=false;
  vid8:boolean=false;
  vid9:boolean=false;
  vid10:boolean=false;
  videoUrl='<iframe width="560" height="315" src="https://www.youtube.com/embed/oXqH-WaPg4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  videosList:any=[
     
  ]


  // { videoURL:'<iframe width="400" height="225" src="https://www.youtube.com/embed/oXqH-WaPg4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'},
  // { videoURL:'<iframe width="400" height="225" src="https://www.youtube.com/embed/oXqH-WaPg4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'},
  // { videoURL:'<iframe width="400" height="225" src="https://www.youtube.com/embed/oXqH-WaPg4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'},
  // { videoURL:'<iframe width="400" height="225" src="https://www.youtube.com/embed/oXqH-WaPg4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'},
  // { videoURL:'<iframe width="400" height="225" src="https://www.youtube.com/embed/oXqH-WaPg4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'},

  constructor(
    private blogSer:VideoBlogService
  ) { }

  ngOnInit(): void {
    this. getBlogData();
    window.scroll(0,0);



 
  }


  getTitle(e:String){
    this.vid1=false;
    this.vid2=false;
    this.vid3=false;
    this.vid4=false;
    this.vid5=false;
    this.vid6=false;
    this.vid7=false;
    this.vid8=false;
    this.vid9=false;
    this.vid10=false;


    this.title=e;
    if(e=='Title 1'){

      this.vid1=true;
    }else if(e=='Title 2'){
      this.vid2=true;
    }else if(e=='Title 3'){
      this.vid3=true;
    }else if(e=='Title 4'){
      this.vid4=true;
    }else if(e=='Title 5'){
      this.vid5=true;
    }else if(e=='Title 6'){
      this.vid6=true;
    }else if(e=='Title 7'){
      this.vid7=true;
    }else if(e=='Title 8'){
      this.vid8=true;
    }else if(e=='Title 9'){
      this.vid9=true;
    }else if(e=='Title 10'){
      this.vid10=true;
    }
  }



  getBlogData(){
    this.blogSer.getVideoBlogService().subscribe((data:any)=>{
      this.videosList=data.result;
      console.log(data)
      console.log(this.videosList)



      for (let i = 0; i < this.videosList.length; i++) {
        let vid = document.createElement("div");
    
        console.log(i)
    
        
        vid.innerHTML = this.videosList[i].videoPath;
  
        console.log(vid)
        let ele = document.getElementById("video")
  
        ele?.appendChild(vid);
      }
    })
  }
}
