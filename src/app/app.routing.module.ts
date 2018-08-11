import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import All components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ProfileComponent } from './components/common/profile/profile.component';
// import { ManageEventsComponent } from './components/common/manage-events/manage-events.component';
import { EventsCornerComponent } from './components/events-corner/events-corner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
// import { CreateEventComponent } from './components/common/create-event/create-event.component'
// import { DashboardModule } from  './components/dashboard/dashboard/dashboard.module';
const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'about-us', component:AboutUsComponent },
  { path:'events', component:EventsCornerComponent },
  { 
    path:'dashboard',
    // component:DashboardComponent,
    loadChildren: './components/dashboard/dashboard/dashboard.module#DashboardModule',
    // children:[
    //   {path:'profile', component:ProfileComponent},
    //   {path:'manage-events', component:ManageEventsComponent},
    //   {path:'create-event', component:CreateEventComponent}      
    // ]
  },
];

@NgModule({
  declarations:[
    // LoginComponent,
    // HomeComponent,
    // RegisterComponent,
    // DashboardComponent,
    // ProfileComponent, 
    // ManageEventsComponent,
    // EventsCornerComponent,
    // AboutUsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
