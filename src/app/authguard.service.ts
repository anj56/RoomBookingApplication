import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(private router:Router) { }
 
      console.log("In authguard service")
      if(false){
      this.router.navigate(['login'])//navigate to login details
       return true;
      }
      return true;
    }
  }