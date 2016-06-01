/* Angular built-in */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

/* bring main components */
import { Angular2ProjectAppComponent, environment } from './app/';
/* dependency injection */
import { HTTP_PROVIDERS } from '@angular/http';
/* router injection */
import { ROUTER_PROVIDERS } from '@angular/router';

/* for error handling */
if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2ProjectAppComponent,[ HTTP_PROVIDERS, ROUTER_PROVIDERS]);
