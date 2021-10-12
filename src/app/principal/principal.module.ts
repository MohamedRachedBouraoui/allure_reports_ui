import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CommunModule } from '@allure/commun/commun.module';
import { ContenaireAllureComponent } from './components/contenaire-allure/contenaire-allure.component';


@NgModule({
  declarations: [
    AccueilComponent,
    ContenaireAllureComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    CommunModule
  ],
  exports:[
    AccueilComponent
  ]
})
export class PrincipalModule { }
