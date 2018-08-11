import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import All Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { LeftNavComponent} from './components/common/left-nav/left-nav.component';
// import { ProfileComponent } from './components/common/profile/profile.component';
// import { ManageEventsComponent } from './components/common/manage-events/manage-events.component';
import { EventsCornerComponent } from './components/events-corner/events-corner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
// import { CommonFormComponent } from './components/common/common-form/common-form.component';
// import { CreateEventComponent } from './components/common/create-event/create-event.component'
// import { DatepickerComponent } from './components/common/datepicker/datepicker.component';
import { NavMenuComponent } from './components/common/nav-menu/nav-menu.component';
import { DailogBoxComponent } from './components/common/dailog-box/dailog-box.component';
import { InputComponent } from './components/common/input/input.component';

// Import All Modules
import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';
// import { DashboardModule } from  './components/dashboard/dashboard/dashboard.module';

// Import All Services
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    // DashboardComponent,
    // ProfileComponent, 
    // ManageEventsComponent,
    EventsCornerComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    // LeftNavComponent,
    // CreateEventComponent,
    // CommonFormComponent,
    // DatepickerComponent,
    NavMenuComponent,
    DailogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,  
    FormsModule,
    ReactiveFormsModule,
    // DashboardModule
  ],
  providers: [ UserService, EventService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
