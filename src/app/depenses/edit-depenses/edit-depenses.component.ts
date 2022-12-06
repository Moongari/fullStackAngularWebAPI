import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from '../models/budget-models';
import { DepensesService } from '../services/depenses.service';

@Component({
  selector: 'app-edit-depenses',
  templateUrl: './edit-depenses.component.html',
  styleUrls: ['./edit-depenses.component.css']
})
export class EditDepensesComponent implements OnInit{


 messageErrorTyping = 'you must enter only letters';
 errorChecked :boolean = false;
 messageErrorValidation:string | undefined= 'your forms is incorrect !'
 messageValidation:string | undefined= ' Correct !'
 isValidForms : boolean = true;
 loadingForms : boolean= true;

  updateDepenseRequest : Budget={
    id:'',
    name:'',
    amount:0,
    categories :'',
    mandatory:false,
    dateDepenses: ''
  }

  constructor(private depenseService :DepensesService,private route:ActivatedRoute ){}

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          // call api
          this.depenseService.getDepense(id)
          .subscribe({
            next: (response)=> {
                this.updateDepenseRequest= response;
            }
          });
        }
      }
    })
 
  }



  updateSpent(){

    if(!this.errorChecked){

      if(!this.loadingForms){
        this.isValidForms= true;
        console.log(this.messageValidation);
        this.messageValidation;
      }
  
   

    }else{
    
        this.isValidForms= false;
        this.messageErrorValidation;
    
     
    }
   


  }

  isCheckedMandatory($event:Event){
    const isChecked:boolean = ($event.target as HTMLInputElement).checked;
    console.log('selectionner' + isChecked);
  }

  isLetters($event:Event){
    const isLetter:string =($event.target as HTMLInputElement).value;

    isLetter.length>1 && isLetter.match(/[a-z]/i);

      if(!isLetter.match(/[a-z]/i)){
        this.errorChecked= true;
        console.log(this.messageErrorTyping);
      }else{
        this.errorChecked = false;
      }
  }

}
