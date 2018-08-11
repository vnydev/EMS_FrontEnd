import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DomainVar } from './../../../../assets/config';

declare var $:any;
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  @ViewChild('snav')side_nav:any;
  childRoute = [];
  UserProfileDetails:any = {};
  Navlist = [
    {
      name: 'Profile',
      link:'profile'
    },
    {
      name: 'Create Event',
      link:'create-event'
    },
    {
      name: 'Manage Events',
      link:'manage-events'
    }
  ];
  constructor(private router: Router,) { }

  ngOnInit() {
    if($.cookie(DomainVar.accessToken)){
      this.UserProfileDetails = $.cookie(DomainVar.loginUser);
      console.log("user details",this.UserProfileDetails)

    }

  }
  childView(link:string){
    console.log("link",link)
    this.childRoute = [];
    this.childRoute[0] = link;
    // this.router.navigate(childRoute);
  }
}
