import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-haut',
  templateUrl: './navigation-haut.component.html',
  styleUrls: ['./navigation-haut.component.scss']
})
export class NavigationHautComponent implements OnInit {

  nomUtilisateur: string;
  roleUtilisateur: string;
  imageUtilisateur: string;



  constructor() {
    this.nomUtilisateur = "Rached";
    this.roleUtilisateur = "Admin";
    this.imageUtilisateur = "";
   }

  ngOnInit(): void {
  }

  deconnexion(): void{

  }

}
