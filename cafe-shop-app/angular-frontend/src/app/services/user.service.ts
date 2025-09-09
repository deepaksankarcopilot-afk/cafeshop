import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers(): Observable<any[]> { return of([]); }
  createUser(user: any): Observable<any> { return of(user); }
}
