import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environnement } from 'src/environnements/environnement';
import { Budget } from '../models/budget-models';

@Injectable()
export class DepensesService {

baseAPiUrl: string = environnement.baseApiUrl;


  constructor(private http: HttpClient) { }


  getAllDepenses():Observable<Budget[]>{

    return this.http.get<Budget[]>(this.baseAPiUrl + '/api/Budget');
  }

  addDepenses(addBudgetRequest: Budget):Observable<Budget>{
    addBudgetRequest.id='0';
    return this.http.post<Budget>(this.baseAPiUrl + '/api/Budget',addBudgetRequest);
  }


  getDepense(id:string):Observable<Budget>{
    
    return this.http.get<Budget>(this.baseAPiUrl +'/api/Budget/'+ id);

  }


  searchDepenseList(term:string):Observable<Budget[]>{
    console.log(term);

    // ici on va eviter de faire appel au serveur lorsque l'utilisateur tape plus d'une lettre ou aucune lettre
    //ceci permet de gerer l'erreur 404 egalement on renvoie donc un tableau vide
    if(term.length >1 || term.length == 0){return of([]);}

    return this.http.get<Budget[]>(this.baseAPiUrl + `/api/Budget/ByCategorie/${term}`);

  }


  deleteRequestSpent(id:string):Observable<Budget>{
    const idRequest= +id;
    return this.http.delete<Budget>(this.baseAPiUrl + '/api/Budget/' + idRequest);
  }





}
