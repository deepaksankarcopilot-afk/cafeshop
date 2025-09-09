// This file is required for Angular standalone component bootstrapping
import { enableProdMode } from '@angular/core';
import { environment } from '../environments/environment';

if (environment.production) {
  enableProdMode();
}
