import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AnimalService } from './services/animal.service'
import { BaseUtilsService } from './services/base-utils.service'
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withComponentInputBinding()),
    AnimalService,
    BaseUtilsService
  ],
};
