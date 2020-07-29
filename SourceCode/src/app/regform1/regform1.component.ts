import { Component, OnInit } from '@angular/core';
import { Reg1Service } from '../reg1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regform1',
  templateUrl: './regform1.component.html',
  styleUrls: ['./regform1.component.css']
})
export class Regform1Component implements OnInit {


  constructor(private apiService : Reg1Service,private _router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('reg_status') == '2'){
      console.log("You need to fill regform "+sessionStorage.getItem("reg_status"))
      this._router.navigate(['/regform/2'])
    }
    if(sessionStorage.getItem('reg_status') == '3'){
      console.log("You need to fill regform "+sessionStorage.getItem("reg_status"))
      this._router.navigate(['/regform/3'])
    }
  }
  RegisterValue(reg1){
    console.log(reg1);
    this.apiService.postUserData(reg1,sessionStorage.getItem('user_id')).subscribe(
      res => 
      {
        console.log('Basic details has been saved for '+ sessionStorage.getItem('user_id'));
        sessionStorage.setItem('reg_status','2');
        this._router.navigate(['/regform/2'])
      },
      err =>
      { 
        console.log(err)
      }
    );
    
  }
}
