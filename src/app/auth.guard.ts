import { Injectable } from '@angular/core';
import {  CanActivate, } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate()
    {
      console.log('guard has been call !')
    return true;
  }
  
}
