import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InventoryComponent {
  inventoryItems: any[] = [];
  newItem: any = {
    name: '',
    quantity: 0,
    price: 0
  };

  addItem() {
    if (this.newItem.name && this.newItem.quantity > 0 && this.newItem.price > 0) {
      this.inventoryItems.push({ ...this.newItem });
      this.newItem = { name: '', quantity: 0, price: 0 };
    }
  }

  removeItem(index: number) {
    this.inventoryItems.splice(index, 1);
  }
}