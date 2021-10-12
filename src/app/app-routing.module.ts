import { AuthentificationComponent } from '@allure/account/components/authentification/authentification.component';
import { AllureRoutes } from '@allure/commun/exports';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './principal/components/accueil/accueil.component';

const routes: Routes = [
  { path: '', redirectTo: `/${AllureRoutes.ACCUEIL}`, pathMatch: 'full'},
  { path: AllureRoutes.AUTH, component: AuthentificationComponent },
  { path: AllureRoutes.ACCUEIL, component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
