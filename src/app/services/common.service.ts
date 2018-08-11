import { Injectable } from '@angular/core';
import { DomainVar } from '../../assets/config';
import { BehaviorSubject } from 'rxjs';

declare var $: any
@Injectable({
  providedIn: 'root'
})
export class CommonService {

   menus:any = [
      { name: 'Home', link: '/home', default: true },
      { name: 'About Us', link: '/about-us', default: true },
      { name: 'Events', link: '/events', default: false },
      { name: 'Dashboard', link: '/dashboard', default: false },
      { name: 'Register', link: '/register', default: true },
      { name: 'LogIn', link: '/login', default: true },
      { name: 'LogOut', link: '/logout', default: false }
    ];
    private AllnavMenu = new BehaviorSubject<Object[]>(this.menus)
            NavMenu = this.AllnavMenu.asObservable();

    constructor() {
      console.log("common service call")
      if($.cookie(DomainVar.accessToken)){
        this.manageNavMenu()
      }
    }

    updateMenuList(newMenu){
      this.AllnavMenu.next(newMenu);
    }

    manageNavMenu(){
      let newMenu = [];
      this.NavMenu.subscribe(item => {
        console.log("newMenu", item);
        newMenu = item.map((elm: any) => {
          if (elm.name == "LogIn" || elm.name == "Register") {
            elm.default = false;
            elm.event = "";
          } else {
            elm.default = true;
            if (elm.name == "LogOut") {
              elm.event = "logout"
            } else {
              elm.event = "";
            }
          }
          return elm
        })
      })
      this.updateMenuList(newMenu)
    }

}
