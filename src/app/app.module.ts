import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoyeauModule } from '@allure/noyeau/noyeau.module';
import { PrincipalModule } from './principal/principal.module';
import { AccountModule } from '@allure/account/account.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpBackend, HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppConfig } from './app-config';
import { AllureHttpIntercepteurInterceptor } from '@allure/noyeau/intercepteurs/allure-http-intercepteur.interceptor';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/keycloak-init.factory';


export function initialiserApp(appConfig: AppConfig) {
  return () => appConfig.recupererConfig();
}

export function HttpLoaderFactory(httpBackend: HttpBackend) {
  const http = new HttpClient(httpBackend);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    KeycloakAngularModule,

    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
      }
    }),

    NoyeauModule,
    PrincipalModule,
    AccountModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initialiserApp,
      deps: [AppConfig], multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: AllureHttpIntercepteurInterceptor,
      multi: true
    },{
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
