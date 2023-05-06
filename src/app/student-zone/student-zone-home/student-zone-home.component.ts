import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { UploadfileService } from 'src/app/services/uploadfile.service';

@Component({
  selector: 'app-student-zone-home',
  templateUrl: './student-zone-home.component.html',
  styleUrls: ['./student-zone-home.component.scss']
})
export class StudentZoneHomeComponent implements OnInit {

  File: any;
  userData: any;
  notiList:any;

  uploadDocForm!: FormGroup;
  uploadVideoForm!:FormGroup;

  upload:boolean=false;

  newList = [
    {
      id: 1,
      name: "Akhil",
      age: 12,
    },
    {
      id: 2,
      name: "Akhil",
      age: 12,
    },
    {
      id: 2,
      name: "Akhil",
      age: 12,
    },
    {
      id: 2,
      name: "Akhil",
      age: 12,
    },
    {
      id: 2,
      name: "Akhil",
      age: 12,
    }
  ]

  VideoList:any;
  docList:any;
  videoUrl:any;
  constructor(

    private service: UploadfileService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    let user = JSON.stringify(localStorage.getItem('user'));
    this.userData = JSON.parse(JSON.parse(user));

    this.setUploadDocForm();
    this.setUploadVideoForm();
    this.getData();

    this.getNotification();
  }


  setUploadDocForm() {
    this.uploadDocForm = new FormGroup({
      title: new FormControl('')

    })
  }


  setUploadVideoForm(){
    this.uploadVideoForm = new FormGroup({
      title: new FormControl('')

    })
  }



  uploadFile(e: any) {
    // console.log(e.target.files[0])
    this.File = e.target.files[0];
    // let formdata = new FormData();

    // formdata.append("file", this.File)
    // this.service.uploadVideoService(formdata, this.userData.id).subscribe((data) => {
    //   console.log(data)
    // })
  }

  submit(e: any) {

    this.upload=true;
    console.log("submit")
    if (e == 'document') {
      // this.File = e.target.files[0];
      let formdata = new FormData();

      formdata.append("file", this.File)

      formdata.append("title",this.uploadDocForm.value.title);
      this.service.uploadDocService(formdata, this.userData.id).subscribe((data:any) => {
        // console.log(data)
        if(data.status=='success'){

          alert("File Uploaded!");
          this.uploadDocForm.reset();
          this.upload=false;
          this. getData();
        }
      })
    }else if(e == 'video'){

      // console.log("Inside video section")
      let formdata = new FormData();

      formdata.append("file", this.File)

      formdata.append("title",this.uploadVideoForm.value.title);
      this.service.uploadVideoService(formdata, this.userData.id).subscribe((data:any) => {
        console.log(data)
        if(data.status=='success'){

          alert("File Uploaded!");
          this.uploadVideoForm.reset();
          this.upload=false;
          this. getData();
        }
      })
    }
  }


  getData(){
    this.service.getVideoService(this.userData.id).subscribe((data:any)=>{
      // console.log(data);
      this.VideoList=data.upload.video;
      this.docList=data.upload.document;
      console.log(this.VideoList)
      // console.log(this.docList)
      this.videoUrl=this.VideoList[0].path;


    })
  }
  onRightClick() {
    return false;
  }
  getNotification(){
    this.notificationService.getNotificationService().subscribe((data:any)=>{
      console.log(data)
      this.notiList=data.result;
    })
  }
}
