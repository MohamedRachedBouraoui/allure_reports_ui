import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHautComponent } from './components/navigation-haut/navigation-haut.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NavigationHautComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule,
    NgbModule,

  ],
  exports:[
    NavigationHautComponent,
    TranslateModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  ]
})
export class CommunModule { }
