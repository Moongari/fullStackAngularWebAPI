import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { AddDepensesComponent } from './add-depenses/add-depenses.component';
import { BorderDepenseDirective } from './directives/border-depense.directive';
import { DepenseAmountColorPipe } from './pipePersonnalise/depense-amount-color.pipe';
import { UpdateSoldeComponent } from './update-solde/update-solde.component';
import { SoldeListComponent } from './solde-list/solde-list.component';
import { EditDepensesComponent } from './edit-depenses/edit-depenses.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DepensesService } from './services/depenses.service';
import { SoldeService } from './services/solde.service';



const depenseRoutes: Routes = [
{
  path :'budget',
  component: BudgetListComponent
},
{
path :'budget/add',
component: AddDepensesComponent
},
{
path :'budget/:id',
component: EditDepensesComponent
},

{
  path :'solde',
  component: SoldeListComponent
},

{
  path :'solde/update',
  component: UpdateSoldeComponent

}
];

@NgModule({
  declarations: [
    BudgetListComponent,
    AddDepensesComponent,
    BorderDepenseDirective,
    DepenseAmountColorPipe,
    UpdateSoldeComponent,
    SoldeListComponent,
    EditDepensesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(depenseRoutes)
  ],
  providers:[DepensesService,SoldeService] 
  // on definit nos services dans le module Depenses Module plutot qu'au niveau de l'ensemble de l'application
  // pour cela on supprime dans @Injectable la valeur suivante :  providedIn: 'root'


})
export class DepensesModule { }
