import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DomainVar } from '../../../assets/config';

declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDashboard:any = {};
  constructor( private router: Router) { }

  ngOnInit() {
    if($.cookie(DomainVar.accessToken)){
      console.log("user loged in")
      this.userDashboard = $.cookie(DomainVar.loginUser)
    }else{
      console.log("login please")
      this.router.navigate(['/login']);
    }
  }

}
