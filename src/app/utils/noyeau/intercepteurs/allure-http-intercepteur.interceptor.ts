import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';


import { tap } from 'rxjs/operators';
import { ChargementService } from '../services/chargement.service';
import { Router } from '@angular/router';
import { AllureRoutes, NotificationService } from '@allure/commun/exports';
import { CodesReponsesApi } from '@allure/commun/helpers/codes-reponses-api';

@Injectable()
export class AllureHttpIntercepteurInterceptor implements HttpInterceptor {

  constructor(
    private chargementService: ChargementService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.chargementService.afficherChargement();

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.chargementService.masquerChargement();
          }
        },
        (error) => {
          this.chargementService.masquerChargement();

          if (error && error.status === CodesReponsesApi.reponseApi423) {
            this.router.navigate(['./' + AllureRoutes.AUTH]);
          } else if (error && error.status === CodesReponsesApi.reponseApi400) {
           // this.notificationService.ouvrirAlertErreursHttp(error);
          } else if (error && error.status === CodesReponsesApi.reponseApi500) {
           //  this.notificationService.afficherNotificationErreur();
          }
        }
      )
    );

  }
}
