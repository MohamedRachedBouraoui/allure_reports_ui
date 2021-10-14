import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService):()=>Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'Demo-Realm',
        clientId: 'Allure-ui',
      },
      initOptions: {
        checkLoginIframe:true,
        checkLoginIframeInterval:25
        // onLoad: 'check-sso',
        // silentCheckSsoRedirectUri:
        //   window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}
