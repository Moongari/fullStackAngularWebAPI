import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepensesComponent } from './depenses/add-depenses/add-depenses.component';
import { BudgetListComponent } from './depenses/budget-list/budget-list.component';
import { EditDepensesComponent } from './depenses/edit-depenses/edit-depenses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SoldeListComponent } from './depenses/solde-list/solde-list.component';
import { UpdateSoldeComponent } from './depenses/update-solde/update-solde.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

 
  {
    path:'',redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path :'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
