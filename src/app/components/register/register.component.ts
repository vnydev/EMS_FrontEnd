import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userType:Object = {}
  errMsg:any = {};
  signUpOption = [{'option':'Presenter', 'id':1},{'option':'Attendee', 'id':2}]
  newUserDetails:any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    user_type: new FormControl('', [Validators.required])
  })
 
  hide = true;
  getErrorMessage() {
    console.log("this.newUserDetails",this.newUserDetails)
    if(this.newUserDetails.controls.email.invalid && this.newUserDetails.controls.email.dirty && this.newUserDetails.controls.email.touched){
       this.errMsg.email = this.newUserDetails.controls.email.errors.required ? 'You must enter a email' :
      this.newUserDetails.controls.email.errors.email ? 'Not a valid email' :'';
      console.log("email err", this.newUserDetails.controls.email.errors.required )

    }else if(this.newUserDetails.controls.name.invalid && this.newUserDetails.controls.name.dirty && this.newUserDetails.controls.name.touched){
      this.errMsg.name = this.newUserDetails.controls.name.errors.required ? 'You must enter a name' : '';
      console.log("name err", this.newUserDetails.controls.name.errors.required )
    }else if(this.newUserDetails.controls.username.invalid && this.newUserDetails.controls.username.dirty && this.newUserDetails.controls.username.touched){
      this.errMsg.username = this.newUserDetails.controls.username.errors.required ? 'You must enter a username' : '';
      console.log("username err", this.newUserDetails.controls.username.errors.required )
      console.log("this.errMsg", this.errMsg);  
    }else if(this.newUserDetails.controls.password.invalid && this.newUserDetails.controls.password.dirty && this.newUserDetails.controls.password.touched){
      this.errMsg.password = this.newUserDetails.controls.password.errors.required ? 'You must enter a password' : '';
      console.log("password err", this.newUserDetails.controls.password.errors.required )

    }else if(this.newUserDetails.controls.user_type.invalid && this.newUserDetails.controls.user_type.dirty && this.newUserDetails.controls.user_type.touched){
      this.errMsg.user_type = this.newUserDetails.controls.user_type.errors.required ? 'user type is manadatory' : '';
    }
  }

  constructor(private userService:UserService, private router: Router ) { }

  ngOnInit() {
    this.errMsg.email = '';
    this.errMsg.name = '';
    this.errMsg.username = '';
    this.errMsg.password = '';
    this.errMsg.user_type = '';
  }
  

  OnSignUpNewUser(user_details){
    console.log("user_details", user_details);  
    console.log("this.errMsg", this.errMsg);  
    let request_url = "http://localhost:3000/users/register";
    
    console.log("newUserDetails",this.newUserDetails);
    this.userService.CommonPostReq(user_details, request_url).subscribe((res:any) =>{
      console.log("sign up res", res)
      if(res.status = true){
        alert(res.msg)
        this.router.navigate(['/login']);
      }
    })
  }

}
