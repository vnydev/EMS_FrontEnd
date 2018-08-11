import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DomainVar } from './../../../../assets/config';
import { EventService } from '../../../services/event.service';

declare var $:any;

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent implements OnInit {

  EventContainer:any = [];
  constructor(
    private router: Router,
    private eventService:EventService,
  ) { }

  ngOnInit() {
    if($.cookie(DomainVar.accessToken)){
      console.log("user loged in")
      this.getEvents();
    }else{
      console.log("login please")
      this.router.navigate(['/login']);
    }
  }

  getEvents(){
    if($.cookie(DomainVar.loginUser).user_role == 3){
      this.getAllEvents()
    }else{
      this.getEventsByUser()
    }
  }
  getEventsByUser(){

    let url = DomainVar.apiUrl + "users/getEventByUser";

    let userId  = {
      "userId":$.cookie(DomainVar.loginUser).id
    }

    this.eventService.CommonGetReq(userId, url).subscribe((events:any) => {
      console.log("get events by user", events)
      this.EventContainer = events.data
    })

    
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
  deleteEvent(event_id){
    let url = DomainVar.apiUrl + "users/removeEvent";

    let userId  = {
      "userId":$.cookie(DomainVar.loginUser).id,
      "eventId":event_id
    }
    this.eventService.CommonGetReq(userId, url).subscribe((removeEvents:any) => {
      console.log("removeEvents", removeEvents)
      if(removeEvents.status == true){
        this.getEventsByUser();
      }
    }, err=>{
      console.log("unable delete", err);
      alert(err.error.message)
    })
  }

}
