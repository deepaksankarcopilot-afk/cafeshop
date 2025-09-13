
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InventoryComponent implements OnInit {
  inventoryItems: any[] = [];
  newItem: any = { name: '', quantity: 0, price: 0 };
  editItem: any = null;

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.inventoryItems = data['inventory'] || [];
    });
  }

  addItem() {
    if (this.newItem.name && this.newItem.quantity > 0 && this.newItem.price > 0) {
      this.inventoryService.create(this.newItem).subscribe((item) => {
        this.inventoryItems.push(item);
        this.newItem = { name: '', quantity: 0, price: 0 };
      });
    }
  }

  edit(item: any) {
    this.editItem = { ...item };
  }

  updateItem() {
    if (this.editItem && this.editItem.id) {
      this.inventoryService.update(this.editItem.id, this.editItem).subscribe((updated) => {
        const idx = this.inventoryItems.findIndex(i => i.id === this.editItem.id);
        if (idx > -1) this.inventoryItems[idx] = updated;
        this.editItem = null;
      });
    }
  }

  deleteItem(id: number) {
    this.inventoryService.delete(id).subscribe(() => {
      this.inventoryItems = this.inventoryItems.filter(i => i.id !== id);
    });
  }

  cancelEdit() {
    this.editItem = null;
  }
}