import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChargementService {

  objetChargememt = new Subject<boolean>();
  constructor() {}

  afficherChargement() {
    this.objetChargememt.next(true);
  }

  masquerChargement() {
    this.objetChargememt.next(false);
  }
}
