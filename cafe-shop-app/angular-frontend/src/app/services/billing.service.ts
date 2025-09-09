import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BillingService {
  createBill(bill: any) {
    // TODO: Implement API call
    return {
      subscribe: (cb: any) => cb({ success: true })
    };
  }
}
