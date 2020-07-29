
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private _router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(sessionStorage.getItem("session_id")!== null){
        console.log('Logged in: true');
        return true;
    }else{
        console.log('user is not logged in');
        alert("USER IS REQUIRED TO LOGIN FIRST");
        this._router.navigate(['/login']);
        return false;
    }
}
}