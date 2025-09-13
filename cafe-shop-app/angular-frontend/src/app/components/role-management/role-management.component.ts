

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RoleManagementComponent implements OnInit {
  roles: any[] = [];
  newRole: any = { name: '' };
  editRole: any = null;

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.roles = data['roles'] || [];
    });
  }

  addRole() {
    if (this.newRole.name) {
      this.roleService.create(this.newRole).subscribe((role) => {
        this.roles.push(role);
        this.newRole = { name: '' };
      });
    }
  }

  edit(role: any) {
    this.editRole = { ...role };
  }

  updateRole() {
    if (this.editRole && this.editRole.id) {
      this.roleService.update(this.editRole.id, this.editRole).subscribe((updated) => {
        const idx = this.roles.findIndex(r => r.id === this.editRole.id);
        if (idx > -1) this.roles[idx] = updated;
        this.editRole = null;
      });
    }
  }

  deleteRole(id: number) {
    this.roleService.delete(id).subscribe(() => {
      this.roles = this.roles.filter(r => r.id !== id);
    });
  }

  cancelEdit() {
    this.editRole = null;
  }
    removeRole(role: any) {
      const idx = this.roles.indexOf(role);
      if (idx > -1) {
        this.roles.splice(idx, 1);
      }
    }
}
