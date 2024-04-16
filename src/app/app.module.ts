import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/nav-bar/nav-logo/nav-logo.component';
import { SharedModule } from './theme/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AddBankComponent } from './Forms/add-bank/add-bank.component';
import { AgenceComponent } from './demo/Listes/agence/agence.component'
import { BankSelectComponent } from './demo/Listes/bank-liste/bank-select/bank-select.component'
import { EditAgcComponent } from './demo/Listes/agence/edit-agc/edit-agc.component'
import { AddClientComponent } from './Forms/add-client/add-client.component'
import { ClientsComponent } from './demo/Listes/clients/clients.component'
import { EditBqComponent } from './demo/Listes/bank-liste/edit-bq/edit-bq.component'
import { AddAgcComponent } from './Forms/add-agc/add-agc.component'
import { Appelfond } from './appelfond';
import { AppelfondComponent } from './appelfond/appelfond.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    AddBankComponent,
    AgenceComponent,
    BankSelectComponent,
    EditAgcComponent,
    AddClientComponent,
    ClientsComponent,
    EditBqComponent,
    AddAgcComponent,
    AppelfondComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, HttpClientModule],
  providers: [NavigationItem],
  bootstrap: [AppComponent],
  exports: [NavBarComponent]
})
export class AppModule {}
