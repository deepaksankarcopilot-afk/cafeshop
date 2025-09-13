
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingService } from '../../services/billing.service';
import { ActivatedRoute } from '@angular/router';
import { Bill } from '../../app-models';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BillingComponent implements OnInit {
  bills: any[] = [];
  items: any[] = [];
  totalAmount: number = 0;
  bill: Bill = new Bill();
  editBill: any = null;

  constructor(
    private billingService: BillingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.bills = data['bills'] || [];
    });
  }

  addBill() {
    this.billingService.create(this.bill).subscribe((bill) => {
      this.bills.push(bill);
      this.resetBilling();
    });
  }

  edit(bill: any) {
    this.editBill = { ...bill };
  }

  updateBill() {
    if (this.editBill && this.editBill.id) {
      this.billingService.update(this.editBill.id, this.editBill).subscribe((updated) => {
        const idx = this.bills.findIndex(b => b.id === this.editBill.id);
        if (idx > -1) this.bills[idx] = updated;
        this.editBill = null;
      });
    }
  }

  deleteBill(id: number) {
    this.billingService.delete(id).subscribe(() => {
      this.bills = this.bills.filter(b => b.id !== id);
    });
  }

  cancelEdit() {
    this.editBill = null;
  }

  resetBilling() {
    this.items = [];
    this.totalAmount = 0;
    this.bill = new Bill();
  }

    addItem(item: { name: string; price: number }) {
      if (item && item.name && item.price) {
        this.items.push(item);
        this.totalAmount += item.price;
      }
    }

    generateBill() {
      this.bill.items = this.items;
      this.bill.totalAmount = this.totalAmount;
      this.addBill();
    }
}