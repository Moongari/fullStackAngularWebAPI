import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { Budget } from '../models/budget-models';
import { DepensesService } from '../services/depenses.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-depenses',
  templateUrl: './search-depenses.component.html',
  styleUrls: ['./search-depenses.component.css']
})
export class SearchDepensesComponent implements OnInit{

//permet de creer et gerer un flux de donner comme un tableau de lequel on ajouterai des données  a...ab .abc..abcd..
  searchTerm = new Subject<string>(); 
  depenses$:Observable<Budget[]> | undefined;
  constructor(private router:Router,private depensesService:DepensesService,public _location: Location){}

  messageErrorSaisie:string = '';
  errorTypingCategorie:boolean=false;
  budgetDepenses: Budget[] = [];
  messageBadRequest : string = 'Aucun resultat pour cette recherche';
  isBadBadRequest:boolean= false;
  resultSelected : string ='';
  isLoading:boolean= false;
  
  
  
  ngOnInit(): void {

    this.depenses$= this.searchTerm.pipe(

        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((term)=> this.depensesService.searchDepenseList(term)),

        catchError(error=>{
            //console.log('error');
            this.isBadBadRequest= true;
            this.messageBadRequest;
          return of([]);
        })
        
       
    );
    //this.refresh();
    this.loadList();
  }


  search(term:string){

    //console.log("Term:"+ term);
    
    if(term !== null){
    
      this.searchTerm.next(term);
      // ici on reinitialise la variable afin que la liste disparaisse
      this.resultSelected='';

    }else{
    this.searchTerm.complete();
    }
    

  }

  loadList(){

    this.depensesService.getAllDepenses().subscribe({
      next:(depense)=>{
        this.budgetDepenses= depense;
      }
    });

  }

  gotoEdit(depense:Budget){

    const link = ['/budget',depense.id];
    this.router.navigate(link);
  }


  selectedCategorie(cat:string | any){
    
    console.log('result' + cat.substring(0,1));
    if(cat.substring(0,1) !== null){
      this.isLoading =true;
      return this.resultSelected = cat.substring(0,1);
     
    }else{
      this.isLoading= false;
    }
   
  }

}
