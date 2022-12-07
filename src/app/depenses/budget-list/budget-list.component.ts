import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/depenses/models/budget-models';
import { Solde } from 'src/app/depenses/models/solde-models';
import { DepensesService } from 'src/app/depenses/services/depenses.service';
import { budgetDepenses } from 'src/app/depenses/models/mock-depenses';
import { elementAt } from 'rxjs';
import { SoldeService } from 'src/app/depenses/services/solde.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit{

  
    isSoldeCalculated: boolean = false;
    soldeCalcul: number= 0;
    valueOfamountSolde: number= 0;
    messageWarningSolde : string= 'your sold is negative !!';

    depenseNameSelected:string='';
    isErrorMessage : boolean = false;
    soldeByApi:Solde [] =[];
  
    soldeActual:number=0;
    messageErrorSaisie:string = '';
    errorTypingCategorie:boolean=false;
    searchCategories:string='';
    



  budgetDepenses: Budget[] = [];
  

  //Utilisation du mock
  DepensesList:Budget[]=budgetDepenses;
  
 



  constructor (private depenseService : DepensesService , private soldeService: SoldeService,private router:Router){}

  ngOnInit(): void {


  //Appel du service pour le Solde
  this.soldeService.getSolde().subscribe({
    next:(solde)=> {
      console.log(solde);
      this.soldeByApi= solde;
      this.soldeActual = this.soldeByApi[0].amount
      //console.log('result'+this.soldeActual)
     
     
    },
    error:(response)=>{console.table(response);}
  })


  

    //appel du service depense
    this.depenseService.getAllDepenses().subscribe({
      next:(depenses)=>{
        console.table(depenses);

        this.budgetDepenses=depenses;
        
        this.CalculBalance(this.soldeActual);
        this.verifyYourSolde();
      },
      error:(response)=>{console.table(response);}
    })


  
    
  
  }

  CalculBalance(solde:number){
 
    for (let index = 0; index < this.budgetDepenses.length; index++) {
      this.soldeCalcul=  this.budgetDepenses[index].amount + this.soldeCalcul;
      //console.log(this.soldeCalcul);
    }
     
   

    if(this.isSoldeCalculated != true){
      const newBalance =  solde - (this.soldeCalcul);
      solde= newBalance;
     this.isSoldeCalculated=true;
    }
    this.soldeActual = solde;
    return this.soldeActual;

  }

  verifyYourSolde(){

    if(this.soldeActual<0){

      return this.messageWarningSolde;
    }else{

      return this.messageWarningSolde ='you have a positive solde , do not panic ';
    }

   
  }

  selectNameDepense(depenses:Budget){
    //const index: number = +(event.target as HTMLInputElement).value;

    console.log(depenses.name);
  }

  selectinfoList(depenseId:string)
  {
    //const index: number = +(event.target as HTMLInputElement).value;
    const id = +depenseId;
    const depensesValue: Budget| undefined= this.budgetDepenses.find(dep=>dep.id==depenseId);
    this.isErrorMessage= false;
    if(depensesValue){
      console.log('vous avez selectionné la depense '+ depensesValue.name);
      this.depenseNameSelected= "LE :" + depensesValue.dateDepenses +"-"+ depensesValue.name + " = " +depensesValue.amount + '€'
    }else{
      console.log('aucun resultat ne correspond a cette recherche ');
      this.depenseNameSelected = 'Aucun resultat ne correspond a cette recherche.';
     this.isErrorMessage= true;
    }


    // if(id<0){   this.depenseNameSelected= 'Aucune information';}

    // if(id> this.budgetDepenses.length)
    // {
    //   this.depenseNameSelected= 'Aucune information';
    // }else{
    //   console.log(this.budgetDepenses[id].name);
    //   this.depenseNameSelected = this.budgetDepenses[id].name.toUpperCase() + " = " + this.budgetDepenses[id].amount +"€";
    // }


  }

  gotoDepenseEdit(editDepense:Budget){

    this.router.navigate(['/budget',editDepense.id]);
  }

  selectCategorie(categorie:any)
  {

    if(isNaN(categorie) && categorie !== null){

      this.errorTypingCategorie= false;

      if(categorie.length>0){
        this.depenseService.searchDepenseList(categorie)
        .subscribe({
          next:(cat)=>{
            console.table(cat)
            this.budgetDepenses= cat;
          },
          error:(response)=>{console.table(response);}
        })
      }

      
    }else{
      
      if(categorie.trim() === null)
    
      {   this.messageErrorSaisie='';}
      else{
        this.errorTypingCategorie= true;
        this.messageErrorSaisie='Error, please typing only string characteres';
      }
     
  
    }

 

   
  


    }
  
 
}

