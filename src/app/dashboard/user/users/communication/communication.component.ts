import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  userData: any;
  date = new Date();

  messageForm!: FormGroup;
  // chatBox:any=[

  //     {
  //       by:"user",
  //       name:"Akhil",
  //       msg:"Hi! this is test message..!",
  //       attachment:"",
  //       date:this.date
  //     },
  //     {
  //       by:"admin",
  //       name:"Admin",
  //       msg:"Reply by Admin maessages",
  //       attachment:"",
  //       date:this.date
  //     },
  //     {
  //       by:"user",
  //       name:"Akhil",
  //       msg:"When will be conduct our mock vi-va!",
  //       attachment:"",
  //       date:this.date
  //     },
  //     {
  //       by:"user",
  //       name:"Akhil",
  //       msg:"When will be conduct our mock vi-va!",
  //       attachment:"",
  //       date:this.date
  //     },
  //     {
  //       by:"admin",
  //       name:"Admin",
  //       msg:"fri, Aug 23",
  //       attachment:"",
  //       date:this.date
  //     },
  //     {
  //       by:"admin",
  //       name:"Admin",
  //       msg:"date not declared",
  //       attachment:"",
  //       date:this.date
  //     },

  // ];

  chatBox: any;
  constructor(
    private service: UserDataService
  ) { }

  ngOnInit(): void {
    let user = JSON.stringify(localStorage.getItem('user'));
    this.userData = JSON.parse(JSON.parse(user));
    console.log(this.userData);

    this.setMessageForm();
    this.getMessages();
  }

  setMessageForm() {
    this.messageForm = new FormGroup({
      by: new FormControl('user'),
      name: new FormControl(this.userData.fname + " " + this.userData.lname),
      message: new FormControl(''),
      attachment: new FormControl(''),
      date: new FormControl(this.date)
    })
  }


  getMessages() {
    this.service.getUserDataCommunicationService().subscribe((result: any) => {
      console.log(result);
      this.chatBox = result.communication;
    })
  }

  sendMsg() {
    // console.log("Message Sent Succefully..!", this.messageForm.value)
    this.service.updateUserCommunicationService(this.messageForm.value, 'communication').subscribe((result) => {
      // console.log(result);
      this.getMessages();
      this.messageForm.reset();
      this.messageForm = new FormGroup({
        by: new FormControl('user'),
        name: new FormControl(this.userData.fname + " " + this.userData.lname),
        message: new FormControl(''),
        attachment: new FormControl(''),
        date: new FormControl(this.date)
      })
      let msg = document.getElementById('message_area')

      msg?.scroll(0, 0)




    })
  }
}
