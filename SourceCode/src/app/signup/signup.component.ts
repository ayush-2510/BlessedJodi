import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 username: string;
 email: string;
  pass1;
  pass2;
  constructor(private apiService : UserService,private _router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('reg_status') == '1'){
      this._router.navigate(['/regform/1'])
    }
    if(sessionStorage.getItem('reg_status') == '2'){
      this._router.navigate(['/regform/2'])
    }
    if(sessionStorage.getItem('reg_status') == '3'){
      this._router.navigate(['/regform/3'])
    }

  }

  registerUser(user){
    console.log(user)
    this.apiService.postUser(user).subscribe(
      res => 
      {
        sessionStorage.setItem('user_id', this.username)
        console.log('signup details has been saved for '+ sessionStorage.getItem('user_id'));
        sessionStorage.setItem('reg_status','1');
        sessionStorage.setItem('email',this.email);
        this._router.navigate(['/regform/1'])
      },
      err =>
      { 
        alert("User Already Exist !! Use different user name");
        
        
        console.log(err)
      }
    );
  }
}
