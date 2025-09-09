import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingService } from '../../services/billing.service';
import { Bill } from '../../app-models';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BillingComponent {
  items: any[] = [];
  totalAmount: number = 0;
  bill: Bill = new Bill();

  constructor(private billingService: BillingService) {}

  addItem(item: any) {
    this.items.push(item);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.items.reduce((sum, item) => sum + item.price, 0);
  }

  generateBill() {
    this.bill.items = this.items;
    this.bill.totalAmount = this.totalAmount;
    this.billingService.createBill(this.bill).subscribe(response => {
      console.log('Bill generated successfully', response);
      this.resetBilling();
    });
  }

  resetBilling() {
    this.items = [];
    this.totalAmount = 0;
    this.bill = new Bill();
  }
}