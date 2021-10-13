import { ApiService } from '@allure/commun/exports';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private apiService: ApiService) { }

  recupererListeProjets(): Observable<Projet[]> {
     return this.apiService.get<Projet[]>('/projets/liste-projets');
  }

  recuperePrefixApi():string{
    return this.apiService.recuperePrefixApi();
  }
}
