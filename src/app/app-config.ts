
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IAppConfig {
  apiEndpoint: string;
  version?: string;
  environnement?: string;
}


@Injectable()
export class AppConfig {
    static parametres: IAppConfig;
    constructor(private httpClient: HttpClient) {}
    chargement(): Observable<IAppConfig> {
        return this.httpClient.get<IAppConfig>(`assets/config/app.json`);
    }

  recupererConfig(): Promise<void> {
      return this.chargement()
          .toPromise()
          .then(data => {
            AppConfig.parametres = data;
          }).catch(error =>
            {
              return console.log(`erreur chargement app json : ${error}`);
            } );
  }
}
