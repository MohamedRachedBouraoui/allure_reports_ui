import { Projet } from '@allure/principal/models/projet';
import { VersionProjet } from '@allure/principal/models/version-projet';
import { ProjetService } from '@allure/principal/services/projet.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  @ViewChild('iframeObj', {static: false}) iframeObj: ElementRef | undefined;

  nomUtilisateur: string;
  roleUtilisateur: string;
  imageUtilisateur: string;

  formRecherche: FormGroup;
  listeProjets: Projet[] = [];
  listeVersions: VersionProjet[] = [];

  url: string = '';
  //afficherIframe = this.;
  show = false;

  constructor(private formBuilder: FormBuilder,
    private projetService: ProjetService,
    private keycloakService: KeycloakService) {

    this.nomUtilisateur = '';
    this.roleUtilisateur = '';
    this.imageUtilisateur = "";

    this.formRecherche = this.formBuilder.group({
      nomProjet: [''],
      version: [''],
    });

  }

  ngOnInit(): void {
    this.nomUtilisateur = this.keycloakService.getUsername();
    this.projetService.recupererListeProjets().subscribe((projets: Projet[]) => {
      this.listeProjets = projets
    });


  }

  injectCustomHttpInterceptorHook():void {

    if(this.iframeObj ==null){
      return;
    }

    let iframeWindow = (this.iframeObj.nativeElement.contentWindow || this.iframeObj.nativeElement.contentDocument);
    let xhrObj =iframeWindow.XMLHttpRequest.prototype.open;
    var parentObj = this;
    iframeWindow.XMLHttpRequest.prototype.open = function () {
        this.addEventListener('load', function() {
                console.log('load...: ');
        });
        xhrObj.apply(this, arguments);
        this.setRequestHeader('Authorization', "Bearer " + this.keycloakService.getToken());
    }
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
        this.url = this.projetService.recuperePrefixApi() + '/' + version.url;
      } else {
        this.url = '';
      }

    } else {
      this.url = '';
    }
    this.show = this.url!='';
  }
  afficherIFrame(): boolean {
    return this.url !== '';
  }
  deconnexion(): void {
    this.keycloakService.logout();

  }

}
