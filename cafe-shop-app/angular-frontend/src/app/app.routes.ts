
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BillingComponent } from './components/billing/billing.component';
import { InventoryResolver } from './resolvers/inventory.resolver';
import { RoleManagementResolver } from './resolvers/role-management.resolver';
import { BillingResolver } from './resolvers/billing.resolver';
import { UserManagementResolver } from './resolvers/user-management.resolver';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-management', component: UserManagementComponent, resolve: { users: UserManagementResolver } },
  { path: 'role-management', component: RoleManagementComponent, resolve: { roles: RoleManagementResolver } },
  { path: 'inventory', component: InventoryComponent, resolve: { inventory: InventoryResolver } },
  { path: 'billing', component: BillingComponent, resolve: { bills: BillingResolver } },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
