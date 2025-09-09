import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string) {
    // TODO: Implement API call
    return {
      subscribe: (handlers: any) => {
        if (username === 'admin' && password === 'admin') {
          handlers.next && handlers.next();
        } else {
          handlers.error && handlers.error('Invalid credentials');
        }
      }
    };
  }
}
