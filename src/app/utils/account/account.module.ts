import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AuthentificationComponent } from './components/authentification/authentification.component';


@NgModule({
  declarations: [
    AuthentificationComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports:[ AuthentificationComponent ]
})
export class AccountModule { }
