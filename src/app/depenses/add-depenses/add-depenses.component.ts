import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from 'src/app/depenses/models/budget-models';
import { DepensesService } from 'src/app/depenses/services/depenses.service';

@Component({
  selector: 'app-add-depenses',
  templateUrl: './add-depenses.component.html',
  styleUrls: ['./add-depenses.component.css']
})
export class AddDepensesComponent implements OnInit{

  

  messageError : string ='';

  addDepenseRequest: Budget={
    id:'',
    name:'',
    amount:0,
    categories :'',
    mandatory:false,
    dateDepenses: ''
  }



  constructor(private depenseService:DepensesService,private router:Router){}

  ngOnInit(): void {

  }

  addSpent(){
    console.log(this.addDepenseRequest);

    if(this.addDepenseRequest.amount>0){

      this.depenseService.addDepenses(this.addDepenseRequest)
      .subscribe({
        next:(depense)=>{
          this.router.navigate(['budget']);
        }
      });
    }else{

    this.messageError ='Your amount must be superior by zero or not negative value !';
    }

  
   
  }
}
