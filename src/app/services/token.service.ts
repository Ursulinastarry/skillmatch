import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient) {}

  // Call this when user logs in, backend will set HttpOnly cookie
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post('/auth/login', credentials, { withCredentials: true });
  }

  // Backend clears the HttpOnly cookies
  logout(): Observable<any> {
    return this.http.post('/auth/logout', {}, { withCredentials: true });
  }

  
  
    // Call this to check if the user is authenticated
    isAuthenticated(): Observable<any> {
      return this.http.get('/auth/check', { withCredentials: true });
    }
  
    // Call this to get the access token (if not HttpOnly)
    getAccessToken(): string | null {
      return localStorage.getItem('access_token');
    }
  
    // Call this to set the access token (if not HttpOnly)
    setAccessToken(token: string): void {
      localStorage.setItem('access_token', token);
    }
  }