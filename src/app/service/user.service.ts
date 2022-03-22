import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
  checkUser(user: User):boolean {
    //throw new Error('Method not implemented.');
    if(User.email=="zensar@gmail.com" && User.password=="zensar")
    return true;
    else
    return false;
    
   }
}