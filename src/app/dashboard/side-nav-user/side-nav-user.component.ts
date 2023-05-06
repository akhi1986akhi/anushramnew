import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { UploadfileService } from 'src/app/services/uploadfile.service';

@Component({
  selector: 'app-side-nav-user',
  templateUrl: './side-nav-user.component.html',
  styleUrls: ['./side-nav-user.component.scss']
})
export class SideNavUserComponent implements OnInit {
  file:any;
  userData:any;
  photo:any;
  notificationMsg='';
  constructor(
    private upload:UploadfileService,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    let user = JSON.stringify(localStorage.getItem('user'));
    this.userData = JSON.parse(JSON.parse(user));
    this.photo = localStorage.getItem("profileImage")
    // console.log(this.photo);
    // console.log(this.userData,"user data");

    this.getNotiFication();
  }
  uploadFile(event:any){
    // console.log(event.target.files[0])
    this.file = event.target.files[0];
    // console.log(this.file);
    let formdata = new FormData();
    formdata.set("file", this.file);
    this.upload.uploadFileService(formdata,this.userData.id).subscribe((result)=>{
      // console.log(result);
    })
  }

  notiList:any;
  unreadLength:any;
  getNotiFication(){
    this.notificationService.getNotificationService().subscribe((data:any)=>{
      // console.log(data)

      this.notiList=data.result;
      // console.log(this.notiList)
      let unreadList= this.notiList.filter((item: { readStatus: string; })=> item.readStatus=='unread')

      // console.log("length is ",unreadList.length)
      this.unreadLength=unreadList.length
    })
  }
 
  getNotificationMSG(e:any){
    // console.log(e);
    this.notificationMsg=e;
  }
}
