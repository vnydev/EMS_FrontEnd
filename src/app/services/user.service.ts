import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Promise, resolve, reject } from 'q';
import { DomainVar } from '../../assets/config';

declare var $: any;

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { };
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '
    })
  };
  CommonPostReq(sendData: any, request_url: string) {
    this.httpOptions.header = new HttpHeaders()
      .set('Content-Type', ' application/x-www-form-urlencoded;charset=utf-8;')
      .set('Authorization', 'bearer ');
    return this.httpClient.post(request_url, sendData, this.httpOptions.header);
    // .toPromise().then((res) =>{
    //    resolve(res);
    // }, (err)=>{
    //   console.log("req faild",err);
    //   reject(err);
    // })
  }
  CommonGetReq(sendParams: any, request_url: string) {
    this.httpOptions.header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'bearer ');
      this.httpOptions.params = new HttpParams();
      this.httpOptions.params = sendParams;
    return this.httpClient.get(request_url, this.httpOptions);
    // .toPromise().then((res) =>{
    //    resolve(res);
    // }, (err)=>{
    //   console.log("req faild",err);
    //   reject(err);
    // })
  }
  setCookieForLoginUser(userSessionInfo) {
    console.log("userSessionInfo", userSessionInfo);
    // $.cookie.json = true;

    let expiresIn = userSessionInfo.expiresIn / (24 * 60 * 60);
    $.cookie(DomainVar.accessToken, userSessionInfo.accessTokenDB, { expires: expiresIn, path: DomainVar.domainRootPath, domain: DomainVar.domainVal });
    $.cookie(DomainVar.refreshToken, userSessionInfo.refreshTokenDB, { expires: 365, path: DomainVar.domainRootPath, domain: DomainVar.domainVal });
    $.cookie.json = true;    
    $.cookie(DomainVar.loginUser, userSessionInfo.user, { expires: 365, path: DomainVar.domainRootPath, domain: DomainVar.domainVal });
    // $.cookie.json = false;

  }
}
