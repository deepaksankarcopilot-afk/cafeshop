import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BillingService {
  private apiUrl = environment.apiUrl + '/api/billing';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(bill: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bill);
  }

  update(id: number, bill: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, bill);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
