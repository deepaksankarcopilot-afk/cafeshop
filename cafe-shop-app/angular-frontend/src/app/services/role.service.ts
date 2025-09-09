import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleService {
  getRoles(): Observable<any[]> { return of([]); }
}
