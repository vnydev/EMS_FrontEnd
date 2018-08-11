import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input()icon:Boolean;
  @Input()iconName:String;
  @Input()Placeholder:String;
  @Input()selectInputValue:String;
  @Input()InputType:String;


  ngOnInit() {
  }

}
