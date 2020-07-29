
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthRegService implements CanActivate {
    constructor(private _router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(sessionStorage.getItem("reg_status") == null){
        console.log('Signup first to fill the registration form')
        this._router.navigate(['/signup'])
    }
        else{
            return true;
        }
    }
}
