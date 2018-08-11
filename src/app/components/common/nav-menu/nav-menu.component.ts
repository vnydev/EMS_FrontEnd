import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable  } from 'rxjs';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }
  @Input()NavMenu:Observable<any[]>;
  @Output()userLogoutEvent:EventEmitter<any> =  new EventEmitter();

  ngOnInit() {
  }
  
  userLogout(event){
      this.userLogoutEvent.emit(event)
  }

}
