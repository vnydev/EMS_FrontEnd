import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  custom= "<div>i m div <\/div>"
  constructor(){
    console.log("cookie.json root call")
    $.cookie.json = true;
  }
}
