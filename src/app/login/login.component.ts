import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  message:string='';
  name:string ='';
  password:string ='';
  isLoggedIn:boolean= false;
  auth : AuthService | undefined;


constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {

    this.auth= this.authService;
  
  }

  setMessage(){
    if(this.authService.isLoggedIn){
      this.message= 'Vous êtes connecté';
    }else{
      this.message = 'Identifiant ou mot de passe incorrect';
    }

  }



  login(){
    this.message='Tentative de connexion en cours...';
    
    this.authService.login(this.name,this.password).subscribe((isLoggedIn:boolean)=>{
      this.setMessage();
      if(isLoggedIn){
        isLoggedIn =isLoggedIn;
        this.router.navigate(['/budget']);
      }else{
        this.password='';
        this.router.navigate(['/login']);
   
      }
      
    })
    

  }

  logout(){
    this.authService.logOut();
    this.message='vous etes deconnecté';
  }

}
