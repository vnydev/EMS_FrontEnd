import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { DomainVar } from '../../../../assets/config';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }
  userDashboard: any = {};
  EventForm = new FormGroup({});
  EventDetails = {
    StartDate: new FormControl(new Date(), Validators.required),
    EndDate: new FormControl(new Date(), Validators.required),
    Time: new FormControl(new Date().getTime(), Validators.required),
    presenter_name: new FormControl('', [Validators.required]),
    event_title: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone_no: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    pin_code: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
    address: new FormControl('', [Validators.required]),
  }
  EventDetailsToSave = {};
  Allusers: any = [];
  @Input() formHeading: string;


  ngOnInit() {
    this.EventForm = new FormGroup(this.EventDetails)
    if ($.cookie(DomainVar.accessToken)) {
      console.log("user loged in")
      this.userDashboard = $.cookie(DomainVar.loginUser)
      this.getAllusers();
    } else {
      console.log("login please")
      this.router.navigate(['/login']);
    }
  }
  getAllusers() {
    let url = DomainVar.apiUrl + 'users/getAllUsers';

    this.userService.CommonGetReq({}, url).subscribe((res: any) => {
      this.Allusers = res.data
    })
  }
  createNewEvent(events_obj) {
    console.log("events_obj", events_obj)
    console.log("EventDetails", this.EventDetails)
    let userId = '';
    let p_name = '';
    if($.cookie(DomainVar.loginUser)){
    if($.cookie(DomainVar.loginUser).user_role === 3){
      userId = this.EventDetails.presenter_name.value._id
      p_name = this.EventDetails.presenter_name.value.name
    }else{
      p_name = this.EventDetails.presenter_name.value
      userId = $.cookie(DomainVar.loginUser).id
    }
    if (this.EventDetails.presenter_name.valid
      && this.EventDetails.event_title.valid
      && this.EventDetails.subject.valid
      && this.EventDetails.description.valid
      && this.EventDetails.StartDate.valid
      && this.EventDetails.EndDate.valid
      && this.EventDetails.Time.valid
      && this.EventDetails.email.valid
      && this.EventDetails.phone_no.valid
      && this.EventDetails.city.valid
      && this.EventDetails.state.valid
      && this.EventDetails.country.valid
      && this.EventDetails.pin_code.valid
      && this.EventDetails.address.valid) {
      this.EventDetailsToSave = {
        user_id: userId,
        StartDate: this.EventDetails.StartDate.value,
        EndDate: this.EventDetails.EndDate.value,
        Time: this.EventDetails.Time.value,
        presenter_name: p_name,
        event_title: this.EventDetails.event_title.value,
        subject: this.EventDetails.subject.value,
        description: this.EventDetails.description.value,
        email: this.EventDetails.email.value,
        phone_no: this.EventDetails.phone_no.value,
        city: this.EventDetails.city.value,
        state: this.EventDetails.state.value,
        country: this.EventDetails.country.value,
        pin_code: this.EventDetails.pin_code.value,
        address: this.EventDetails.address.value
      }
      let url = DomainVar.apiUrl + 'users/create-event';
      this.userService.CommonPostReq(this.EventDetailsToSave, url).subscribe(res => {
        console.log("create event res", res)
        let event_status: any = res;
        if (event_status.status == true) {
          this.router.navigate(['/events']);
        }
      })
    }
    }
  }

}
