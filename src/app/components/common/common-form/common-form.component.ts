import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import {DatepickerComponent} from '../datepicker/datepicker.component'
@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }
 
}
