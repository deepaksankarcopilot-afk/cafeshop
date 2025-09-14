



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
  edit(role: any) {
    this.editRole = { ...role, screens: Array.isArray(role.screens) ? [...role.screens] : [] };
  }
  roles: any[] = [];
  availableScreens: string[] = [
    'user-management',
    'role-management',
    'inventory',
    'billing'
  ];
  newRole: any = { name: '', screens: [] };
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
      // Save selected screens with the role
      this.roleService.create(this.newRole).subscribe((role) => {
        this.roles.push(role);
        this.newRole = { name: '', screens: [] };
      });
    }
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

  // Add handler for checkbox changes
  onScreenToggle(screen: string, event: any) {
    if (event?.target?.checked) {
      if (!this.newRole.screens.includes(screen)) {
        this.newRole.screens.push(screen);
      }
    } else {
      this.newRole.screens = this.newRole.screens.filter((s: string) => s !== screen);
    }
  }

  // Handler for edit screen checkboxes
  onEditScreenToggle(screen: string, event: any) {
    if (!this.editRole || !this.editRole.screens) return;
    if (event?.target?.checked) {
      if (!this.editRole.screens.includes(screen)) {
        this.editRole.screens.push(screen);
      }
    } else {
      this.editRole.screens = this.editRole.screens.filter((s: string) => s !== screen);
    }
  }
}
