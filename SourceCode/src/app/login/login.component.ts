import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService : UserService , private router : Router , private _auth: UserService) {
  }

  ngOnInit() {
    if(sessionStorage.getItem("session_id")!== null){
      this.router.navigate(['/profile'])
    }
  }

  onClickSubmit(data)
  {
    if(data.username == 'admin' && data.password == 'admin'){
      sessionStorage.setItem('session_id','admin')
      this.router.navigate(['/admin'])
    }
    else{
    console.log(data)
    this._auth.loginUser(data).subscribe
    (
      res => 
      {
        sessionStorage.setItem('session_id', res.username )
        console.log('Successfully Logged in User is: '+sessionStorage.getItem('session_id'))
        this.router.navigate(['/profile'])
      },
      err =>
      { 
        alert("Please Enter Valid Username or Password");
          console.log(err)
      }
    )
  }
}
}
