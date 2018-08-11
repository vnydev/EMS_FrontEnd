import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DomainVar } from '../../../assets/config';
import { CommonService } from '../../services/common.service';
import 'rxjs/'
declare var $:any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allNavMenu:any = []; 

  constructor(private router:Router, private commonService:CommonService) { }
  
  ngOnInit() {

    if(!$.cookie(DomainVar.accessToken)){
      this.allNavMenu = this.commonService.menus;
      // this.router.navigate(['/login']);
    }else{
       this.commonService.NavMenu.subscribe(item => {
        // item.map
        this.allNavMenu = item;
      })
    }

  }

  logout(event_tye){
    console.log("event_tye", event_tye)
    if(event_tye == "logout"){
      let allcookie = $.cookie();
      for (let ck in allcookie) {
        $.removeCookie(ck, { path: DomainVar.domainRootPath, domain: DomainVar.domainVal });
      }
      this.updateNavMenu();
      this.router.navigate(['/login']);
    }
  }

  updateNavMenu(){
    let newMenu = [];
    this.commonService.NavMenu.subscribe(item =>{
      console.log("newMenu", item);
        newMenu =  item.map((elm:any) =>{
          if(elm.name == "LogOut" || elm.name == "Dashboard" || elm.name == "Events"){
            elm.default = false;
            elm.event = "";
          }else{
            elm.default = true;
          }
        return elm

      })
    })
    this.commonService.updateMenuList(newMenu);
  }

}
