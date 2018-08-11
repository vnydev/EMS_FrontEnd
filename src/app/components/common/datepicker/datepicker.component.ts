import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DatepickerComponent implements OnInit {

  constructor() { }
  
  @Input()Placeholder:String;
  @Input()selectDate:String;

  ngOnInit() {
  }
}
