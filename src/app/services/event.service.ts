import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  AllUserEvent = [];
  constructor(private httpClient: HttpClient) { }

  setEventData(data){
    this.AllUserEvent.push(data);
  }

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '
    })
  };
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

  CommonPostReq(sendData: any, request_url: string) {
    this.httpOptions.header = new HttpHeaders()
      .set('Content-Type', ' application/x-www-form-urlencoded;charset=utf-8;')
      .set('Authorization', 'bearer ');
    return this.httpClient.post(request_url, sendData, this.httpOptions.header);
  }
}
