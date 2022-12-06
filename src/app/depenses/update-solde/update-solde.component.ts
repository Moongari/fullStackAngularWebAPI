import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solde } from 'src/app/depenses/models/solde-models';
import { SoldeService } from 'src/app/depenses/services/solde.service';

@Component({
  selector: 'app-update-solde',
  templateUrl: './update-solde.component.html',
  styleUrls: ['./update-solde.component.css']
})
export class UpdateSoldeComponent implements OnInit {


constructor(private route: ActivatedRoute,private updateServiceSolde: SoldeService,private router:Router){}


  updateSoldeRequest: Solde ={
    id: '',
    amount:0,
    dateSolde:''
    
  }

  messageError : string ='';
  validMessage:string ='';



  ngOnInit(): void {

    //const soldeId : string|null = this.route.snapshot.paramMap.get('id');

  }






  addNewSoldeAmount(){

    // indique l'id du solde
   
    const Id =  this.updateSoldeRequest.id = '1';

    if(this.updateSoldeRequest.amount<=0){

      return this.messageError='your amount must be superior by 0 and not negative ';
    }else{

      this.validMessage ='your sold has been updated successfully';
      //const updateDateSoldeAmount = new Date(this.updateSoldeRequest.updatedDate);
      console.log(this.updateSoldeRequest.amount + "Date Format" + this.updateSoldeRequest.dateSolde);

      this.updateServiceSolde.addNewSoldeAmount(this.updateSoldeRequest).subscribe({
        next:(response)=>{
          this.router.navigate(['budget']);
        }
      })
      
     
      
      return this.validMessage;
    }


  }

}
