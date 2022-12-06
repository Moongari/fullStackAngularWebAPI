import { Component, OnInit } from '@angular/core';
import { Solde } from 'src/app/depenses/models/solde-models';
import { SoldeService } from 'src/app/depenses/services/solde.service';

@Component({
  selector: 'app-solde-list',
  templateUrl: './solde-list.component.html',
  styleUrls: ['./solde-list.component.css']
})
export class SoldeListComponent implements OnInit{


  soldeList: Solde[]=[];

  constructor(private soldeService: SoldeService){}

  ngOnInit(): void {

    //Appel du service pour le Solde
  this.soldeService.getSolde().subscribe({
    next:(solde)=> {
      console.log(solde);
      this.soldeList= solde;

    },
    error:(response)=>{console.table(response);}
  })

    
  }

}
