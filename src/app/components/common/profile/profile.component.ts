import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DomainVar } from './../../../../assets/config';

declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  UserProfileDetails:any = {}
  constructor(private router: Router ) { }

  ngOnInit() {
    if($.cookie(DomainVar.accessToken)){
      this.UserProfileDetails = $.cookie(DomainVar.loginUser);
      console.log("user details",this.UserProfileDetails)

    }else{
      console.log("login please")
      this.router.navigate(['/login']);
    }
  }

}
