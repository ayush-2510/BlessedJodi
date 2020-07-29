import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { IUser } from './user'
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry,   map, catchError, filter, scan } from 'rxjs/operators'; 

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable(
  //{  providedIn: 'root'}
)

export class UserService {
  private _url :string = "http://localhost:8000/signup";
  private _loginurl :string = "http://localhost:8000/login";
  private _eventUrl :string = "http://localhost:8000/admin";
  private _rmurl :string = "http://localhost:8000/remove";

  constructor(private http: HttpClient) {   
  }

  loginUser(user):Observable<any> {
    return this.http.post<any>(this._loginurl, user)
  }

  postUser(user):Observable<any> {
    return this.http.post <any>(this._url, user)      
  }

  getuser(){
    return this.http.get<any>(this._eventUrl)
  }
  removeuser(uname:string){
    var body ={'uname':uname}
    console.log("you are about to delete " + body.uname)
    var header = new HttpHeaders().set("Content-Type", "application/json");
    console.log("you are about to delete " + body.uname)

    return this.http.post(this._rmurl,body)
  }

}
