import { Component, OnInit } from '@angular/core';
import { Reg1Service } from '../reg1.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regform2',
  templateUrl: './regform2.component.html',
  styleUrls: ['./regform2.component.css']
})
export class Regform2Component implements OnInit {

  constructor(private apiService : Reg1Service,private _router:Router) { }

  ngOnInit() {

    if(sessionStorage.getItem('reg_status') == '1'){
      console.log("You need to fill regform "+sessionStorage.getItem("reg_status"))
      this._router.navigate(['/regform/1'])
    }
    if(sessionStorage.getItem('reg_status') == '3'){
      console.log("You need to fill regform "+sessionStorage.getItem("reg_status"))
      this._router.navigate(['/regform/3'])
    }
  }
  RegisterValue(reg2){
    console.log(reg2);
    this.apiService.postUserData2(reg2,sessionStorage.getItem('user_id')).subscribe(
      res => 
      {
        console.log('Professional details has been saved for '+ sessionStorage.getItem('user_id'));
        sessionStorage.setItem('reg_status','3');
        this._router.navigate(['/regform/3'])
      },
      err =>
      { 
        console.log(err)
      });
    
  }
}
