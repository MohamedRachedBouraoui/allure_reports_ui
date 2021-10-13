import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CommunModule } from '@allure/commun/commun.module';

import { NoyeauModule } from '@allure/noyeau/noyeau.module';



@NgModule({
  declarations: [
    AccueilComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    CommunModule,
    NoyeauModule
  ],
  exports:[
    AccueilComponent
  ]
})
export class PrincipalModule { }
