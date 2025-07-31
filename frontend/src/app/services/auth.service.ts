import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  public isAuthenticated = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // Check for token on service initialization
    const token = localStorage.getItem('token');
    if (token) {
      this._isAuthenticated.next(true);
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this._isAuthenticated.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this._isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
