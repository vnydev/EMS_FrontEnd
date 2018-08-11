import {NgModule, Component, OnInit } from '@angular/core';
import { DomainVar } from '../../../assets/config';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { CommonService } from '../../services/common.service';
import { MatDialog } from '@angular/material';
import { DailogBoxComponent } from './../common/dailog-box/dailog-box.component';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { InputComponent } from '../common/input/input.component';

declare var $:any;

@Component({
  selector: 'app-events-corner',
  templateUrl: './events-corner.component.html',
  styleUrls: ['./events-corner.component.css']
})
export class EventsCornerComponent implements OnInit {

  panelOpenState = false;
  EventContainer:any = [];
  eventAlive:Boolean = false;
  isUserRegiter:Boolean = false;
  eventId:any;
  // animal: string;
  // name: string;
  useremail = new FormControl('', [Validators.required, Validators.email]);

  constructor( 
    private router: Router,
    private eventService:EventService,
    private commonService:CommonService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.commonService.NavMenu.subscribe((item:any) =>{
      console.log("nav item", item)
      if(item.name == "Events"){
        this.eventAlive = item.default;
      }
    })
    console.log("eventAlive", this.eventAlive)
    // console.log("cookie", JSON.parse($.cookie(DomainVar.loginUser)) );
    debugger;
    if($.cookie(DomainVar.accessToken)){
      console.log("user loged in")
      this.getAllEvents()
    }else{
      console.log("login please")
      this.router.navigate(['/login']);
    }
  }

  getAllEvents(){
    let url = DomainVar.apiUrl + "users/getAllEvents";
    let userId  = {
      "user_id":$.cookie(DomainVar.loginUser).id
    }
    this.eventService.CommonGetReq(userId, url).subscribe((events:any) => {
      console.log("get all events", events)
      this.EventContainer = events.data
    })
  }
  registerForEvent(event_id){
    this.eventId = event_id;
    this.isUserRegiter = !this.isUserRegiter;
    console.log("useremail", this.useremail);
    if(this.useremail.valid && this.useremail.value){
      let url = DomainVar.apiUrl + "users/userRegisterForEvent";
      let userInfo = {
        userId:$.cookie(DomainVar.loginUser).id,
        eventId:event_id,
        userEmailId:this.useremail.value
      }
      console.log("userInfo",userInfo)
      this.eventService.CommonPostReq(userInfo, url).subscribe((res:any) =>{
        console.log(res);
        alert(res.msg);
      })
    }
  }
  likeEvent(event_id){
    let url = DomainVar.apiUrl + "users/userLikeEvent";
      let userInfo = {
        eventId:event_id
      }
      console.log("userInfo",userInfo)
      this.eventService.CommonGetReq(userInfo, url).subscribe((res:any) =>{
        console.log("user like event",res);
        if(res.status == true){
          this.getAllEvents();
        }
      })
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DailogBoxComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}
