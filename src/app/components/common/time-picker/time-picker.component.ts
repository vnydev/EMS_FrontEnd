import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  constructor() { }

  @Input()Placeholder:String;
  @Input()selectTime:String
  ngOnInit() {
  }

}
