import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DashboardComponent } from '../dashboard.component';
import { CreateEventComponent } from '../create-event/create-event.component';
import { ProfileComponent } from '../../common/profile/profile.component';
import { ManageEventsComponent } from '../../common/manage-events/manage-events.component';
import { LeftNavComponent} from '../../common/left-nav/left-nav.component';
import { CommonFormComponent } from '../../common/common-form/common-form.component';
import { AppMaterialModule } from '../../../app.material.module';
import { DatepickerComponent } from '../../../components/common/datepicker/datepicker.component';
import { TimePickerComponent } from '../../common/time-picker/time-picker.component';
import { InputComponent } from '../../common/input/input.component';

import { EventService } from '../../../services/event.service';
export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path:'profile', component:ProfileComponent},
      {path:'manage-events', component:ManageEventsComponent},
      {path:'create-event', component:CreateEventComponent}  
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  // declarations:[]
  declarations:[
    InputComponent,
    LeftNavComponent,
    CommonFormComponent,
    DashboardComponent,
    ProfileComponent,
    ManageEventsComponent,
    CreateEventComponent,
    DatepickerComponent,
    TimePickerComponent,
  ],
  providers:[EventService]
  // exports:[DashboardComponent,  ProfileComponent, ManageEventsComponent, CreateEventComponent ],
})
export class DashboardModule { }
