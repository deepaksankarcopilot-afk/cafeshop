import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../services/role.service';

@Injectable({ providedIn: 'root' })
export class RoleManagementResolver implements Resolve<any> {
  constructor(private roleService: RoleService) {}
  resolve(): Observable<any> {
    return this.roleService.getAll();
  }
}
