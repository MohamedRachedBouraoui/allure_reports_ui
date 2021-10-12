import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHautComponent } from './components/navigation-haut/navigation-haut.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NavigationHautComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports:[
    NavigationHautComponent,
    TranslateModule,
  ]
})
export class CommunModule { }
