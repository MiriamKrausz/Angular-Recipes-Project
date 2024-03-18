import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Add the import for mdb-ui-kit
import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
