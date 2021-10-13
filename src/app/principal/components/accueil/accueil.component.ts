import { Projet } from '@allure/principal/models/projet';
import { VersionProjet } from '@allure/principal/models/version-projet';
import { ProjetService } from '@allure/principal/services/projet.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  nomUtilisateur: string;
  roleUtilisateur: string;
  imageUtilisateur: string;

  formRecherche: FormGroup;
  listeProjets: Projet[] = [];
  listeVersions: VersionProjet[] = [];

  url: string='';
  //afficherIframe = this.;

  constructor(private formBuilder: FormBuilder, private projetService: ProjetService, public sanitizer: DomSanitizer) {
    this.nomUtilisateur = "Rached";
    this.roleUtilisateur = "Admin";
    this.imageUtilisateur = "";

    this.formRecherche = this.formBuilder.group({
      nomProjet: [''],
      version: [''],
    });

  }

  ngOnInit(): void {
    this.projetService.recupererListeProjets().subscribe((projets: Projet[]) => {
      this.listeProjets = projets
    });


  }

  changerProjet() {

    this.formRecherche.value.version = null;

    if (this.formRecherche.value.nomProjet) {

      let projet = this.listeProjets.find(x => x.nom == this.formRecherche.value.nomProjet);
      if (projet?.versions) {
        this.listeVersions = projet?.versions;
      } else {
        this.listeVersions = [];
      }

    } else {
      this.listeVersions = [];
    }
  }

  changerVersion() {

    if (this.formRecherche.value.version) {

      let version = this.listeVersions.find(x => x.version == this.formRecherche.value.version);
      if (version?.url) {

        this.url =this.projetService.recuperePrefixApi() + '/' + version.url;
      } else {
        this.url = '';
      }

    } else {
      this.url = '';
    }
  }
  afficherIFrame(): boolean {
    return this.url !== '';
  }
  deconnexion(): void {

  }

}
