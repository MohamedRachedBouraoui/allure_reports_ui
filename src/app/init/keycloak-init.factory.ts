import { KeycloakService } from "keycloak-angular";
import { environment } from 'src/environments/environment';


export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {

  return () =>
    keycloak.init({
      config: {
        url: environment.keycloackAuthUrl,
        realm: environment.keycloackRealm,
        clientId: environment.keycloackClientId,
      },
      loadUserProfileAtStartUp: true,
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true
      },
      // initOptions: {
      //   checkLoginIframe:true,
      //   checkLoginIframeInterval:25
      //   // onLoad: 'check-sso',
      //   // silentCheckSsoRedirectUri:
      //   //   window.location.origin + '/assets/silent-check-sso.html',
      // },
    });
}
