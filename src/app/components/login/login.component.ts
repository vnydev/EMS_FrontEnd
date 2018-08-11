import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DomainVar } from '../../../assets/config';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { map } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMsg: any = {};
  isLinear = true;
  userFormGroup: FormGroup;
  pwdFormGroup: FormGroup;
  forgot_passd:Boolean = false;
  hide = true;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.userFormGroup = this._formBuilder.group({
      username: ['', Validators.required]
    });
    this.pwdFormGroup = this._formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  getErrorMessage() {
    console.log("userFormGroup", this.userFormGroup)
    if (this.userFormGroup.controls.username.invalid && this.userFormGroup.controls.username.dirty && this.userFormGroup.controls.username.touched) {
      this.errMsg.username = this.userFormGroup.controls.username.errors.required ? 'You must enter a username' : '';
    } else if (this.pwdFormGroup.controls.password.invalid && this.pwdFormGroup.controls.password.dirty && this.pwdFormGroup.controls.password.touched) {
      this.errMsg.password = this.pwdFormGroup.controls.password.errors.required ? 'You must enter a password' : '';
    }else if (this.pwdFormGroup.controls.newPassword.invalid && this.pwdFormGroup.controls.newPassword.dirty && this.pwdFormGroup.controls.newPassword.touched) {
      this.errMsg.newPassword = this.pwdFormGroup.controls.newPassword.errors.required ? 'You must enter a password' : '';
    }
    console.log("this.errMsg", this.errMsg);
  }

  UserLogin(user: any, passwd: any) {
    this.errMsg.updatePassword = "";
    this.errMsg.updatePassword = "";
    console.log("user", user)
    let user_details = {
      "username": user.value.username,
      "password": passwd.value.password || null
    }
    console.log("user_details", user_details)
    let request_url = DomainVar.apiUrl + "users/login";
    if(user.valid && passwd.controls.password.valid){
    this.userService.CommonPostReq(user_details, request_url).subscribe(res => {
      console.log("login res", res)
      let UserInfo: any = res;
      if (UserInfo) {
        this.errMsg.authMsg = undefined;
        let expiresIn: any = UserInfo.expiresIn / (24 * 60 * 60);
        this.userService.setCookieForLoginUser(res);
        this.commonService.manageNavMenu();
        alert("Successfuly login")
        this.router.navigate(['/home']);
      }
    }, (err) =>{
      if(err){
        console.log("err", err);
        this.errMsg.authMsg = err.error.message;
      }
    })  
    }
  }

  forgot_password(user, newPasswd){
    console.log("newPasswd", newPasswd)
    this.errMsg.updatePassword = "";
    this.errMsg.authMsg = "";
    if(newPasswd.controls.password.valid){
      this.pwdFormGroup.reset();
    }
    this.forgot_passd = true;
    let url =   DomainVar.apiUrl + 'users/forgotPassword'
    if(user.valid && newPasswd.controls.newPassword.valid){
      console.log("newPasswd", newPasswd)
      let user_details = {
        "username": user.value.username,
        "newPassword": newPasswd.controls.newPassword.value
      }
      this.userService.CommonPostReq(user_details, url).subscribe((res:any) =>{
        console.log("forgot password", res)
        alert(res.msg)
        this.errMsg.updatePassword = res.msg
        if(res.status == true){
          this.forgot_passd = false;
          console.log("pwdFormGroup", this.pwdFormGroup)
          this.pwdFormGroup.reset();
        }
      })
    }
  }

  cancel(){
    this.forgot_passd = false;
  }
}
