import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { InventoryService } from '../services/inventory.service';

@Injectable({ providedIn: 'root' })
export class InventoryResolver implements Resolve<any> {
  constructor(private inventoryService: InventoryService) {}
  resolve(): Observable<any> {
    return this.inventoryService.getAll();
  }
}
