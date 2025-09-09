
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RoleManagementComponent {
  roles: string[] = [];
  newRole: string = '';

  addRole() {
    if (this.newRole) {
      this.roles.push(this.newRole);
      this.newRole = '';
    }
  }

  removeRole(role: string) {
    this.roles = this.roles.filter(r => r !== role);
  }
}
