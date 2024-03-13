import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  /* firebase config api key and others */
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideAuth0({
      domain: 'yourt auth0 domain',
      clientId: ' your client id ',
      authorizationParams: {
        redirect_uri: 'your site',
        audience: 'http://public-api/',
        scope:
          'openid profile email offline_access read:roles read:users read:logs ',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
    ]),
  ],
};
/* "https://damiano-maka.github.io/auth0/" */
