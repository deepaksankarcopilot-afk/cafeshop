import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class UserManagementResolver implements Resolve<any> {
  constructor(private userService: UserService) {}
  resolve(): Observable<any> {
    return this.userService.getAll();
  }
}
