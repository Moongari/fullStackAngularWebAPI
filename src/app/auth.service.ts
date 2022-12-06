import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLoggedIn: boolean= false;
  redirectUrl: string= '';


  constructor() { }


  login(name:string, password:string):Observable<boolean>{

      const isLoggedIn = (name =='Moon' && password=='Moon');

      return of(isLoggedIn)
      .pipe(delay(1000),
      tap(isLoggedIn=> this.isLoggedIn = isLoggedIn)
      );

  }

  logOut(){
    this.isLoggedIn= false;
  }
}
