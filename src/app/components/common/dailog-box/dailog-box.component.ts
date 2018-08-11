import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dailog-box',
  templateUrl: './dailog-box.component.html',
  styleUrls: ['./dailog-box.component.css']
})
export class DailogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DailogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close('false') 
  }
}
