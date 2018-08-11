import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DomainVar } from './../../../assets/config';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeLogin:Boolean= false;
  constructor(private router: Router) { }

  ngOnInit() {
    if($.cookie(DomainVar.accessToken)){
      console.log("user loged in")
      this.activeLogin = false;
      // this.UserProfileDetails = $.cookie(DomainVar.loginUser);
    }else{
      console.log("login please");
      this.activeLogin = true;

      this.router.navigate(['/home']);
    }
  }

}
