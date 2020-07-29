import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { IUser } from './user'
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry,   map, catchError, filter, scan } from 'rxjs/operators'; 
import { Variable } from '@angular/compiler/src/render3/r3_ast';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable(
  //{  providedIn: 'root'}
)

export class Reg1Service {
  private _regurl :string = "http://localhost:8000/regform/1";
  private _regurl2 :string = "http://localhost:8000/regform/2";
  private _profileurl :string = "http://localhost:8000/profile";
  private _profileurl1 :string = "http://localhost:8000/profile1";
  private sendMailURL: string = "http://localhost:8000/sendMail";
  private updateURL: string = "http://localhost:8000/update";
  private update1URL: string = "http://localhost:8000/update1";

  constructor(private http: HttpClient) {   
  }

  postUserData(reg1, username: string):Observable<any> {
    reg1.username=username;
    return this.http.post <any>(this._regurl, reg1)      
  }

  postUserData2(reg2, username: string):Observable<any> {
    reg2.username=username;
    return this.http.post <any>(this._regurl2, reg2)      
  }

  getUserData(uname:string):Observable<any>{
    var body={"uname": uname}
    var header = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>(this._profileurl,JSON.stringify(body),{headers: header})
  }

  getUserData1(uname:string):Observable<any>{
    var body={"uname": uname}
    var header = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>(this._profileurl1,JSON.stringify(body),{headers: header})
  }
  sendMail(email:string){
    var body={"email":email}
    var header = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.sendMailURL,body);
  }
  updatedata(uname:string,udata:any){
    var body={'uname':uname,'udata':udata}
    var header = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>(this.updateURL,JSON.stringify(body),{headers: header})
  }

  updatedata1(uname:string,udata:any){
    var body={'uname':uname,'udata':udata}
    var header = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>(this.update1URL,JSON.stringify(body),{headers: header})
  }

}
