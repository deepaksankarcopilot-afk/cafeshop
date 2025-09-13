import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BillingService } from '../services/billing.service';

@Injectable({ providedIn: 'root' })
export class BillingResolver implements Resolve<any> {
  constructor(private billingService: BillingService) {}
  resolve(): Observable<any> {
    return this.billingService.getAll();
  }
}
