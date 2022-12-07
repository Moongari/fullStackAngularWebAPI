import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<Budget[]>(this.baseAPiUrl + `/api/Budget/ByCategorie/${term}`);

  }





}
