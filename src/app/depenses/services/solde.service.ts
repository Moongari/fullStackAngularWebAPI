import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnement } from 'src/environnements/environnement';
import { Solde } from '../models/solde-models';

@Injectable()
export class SoldeService {

  baseAPiUrl: string = environnement.baseApiUrl;

  constructor(private http: HttpClient) { }


  getSolde():Observable<Solde[]>{

    return this.http.get<Solde[]>(this.baseAPiUrl + '/api/Solde');
  }

  updateSoldeAmount(id:string,updateSoldeAmountRequest:Solde):Observable<Solde>{
    return this.http.put<Solde>(this.baseAPiUrl + 'api/Solde'+id,updateSoldeAmountRequest);
  }

  addNewSoldeAmount(solde:Solde):Observable<Solde>{
    return this.http.post<Solde>(this.baseAPiUrl+ 'api/Solde', solde);
  }

  
}
