import { Appelfond } from './appelfond';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AddBankComponent } from './Forms/add-bank/add-bank.component';
import { AgenceComponent } from './demo/Listes/agence/agence.component'
import { BankSelectComponent } from './demo/Listes/bank-liste/bank-select/bank-select.component'
import { EditAgcComponent } from './demo/Listes/agence/edit-agc/edit-agc.component'
import { AddClientComponent } from './Forms/add-client/add-client.component';
import { ClientsComponent } from './demo/Listes/clients/clients.component';
import { EditBqComponent } from './demo/Listes/bank-liste/edit-bq/edit-bq.component';
import { AddAgcComponent } from './Forms/add-agc/add-agc.component';
import { AppelfondComponent } from './appelfond/appelfond.component';

export const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component')
      },
      {
        path: 'addbq',
        component: AddBankComponent
      },
      {
        path: 'agclist',
        component: AgenceComponent
      },
      {
        path: 'banklistselect',
        component: BankSelectComponent
      },
      {
        path: 'editagc/:agence',
        component: EditAgcComponent
      },
      {
        path: 'addclient',
        component:AddClientComponent
      },
      {
        path: 'Listeclient',
        component:ClientsComponent
      },
      {
       path: 'editbq/:bank',
       component: EditBqComponent
      },
      {
        path: 'addagc',
        component: AddAgcComponent
       },
      {path: 'af' ,component: AppelfondComponent}

    ]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
