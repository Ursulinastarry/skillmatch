import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface LoginResponse {
  accessToken?: string; // May not be returned if stored as HTTP-only cookie
  user: {
    id: number;
    name: string;
    email: string;
    roleId: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://100.26.102.129:80'; // Adjust to your backend
  private lastAuthCheck: number = 0; // Track last authentication check timestamp

  // User information subject
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  
  // Authentication state - will be derived from API calls rather than local token checks
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  
  constructor(private http: HttpClient) {
    // Check authentication state on service initialization
    this.checkAuthStatus();
  }
  
  login(email: string, password: string, roleId: string): Observable<any> {
    const payload = { email, password, roleId };
    console.log('[Auth Debug] Login attempt:', { email, roleId, timestamp: new Date().toISOString() });
    
    return this.http.post<any>(`${this.apiUrl}/users/login`, payload, {
      withCredentials: true,
      observe: 'response' // Get the full response to inspect headers
    }).pipe(
      tap(response => {
        // Log headers to check for Set-Cookie (won't see actual cookie content due to HTTP-only)
        console.log('[Auth Debug] Login response headers:', {
          headers: this.getHeadersAsObject(response.headers),
          status: response.status,
          timestamp: new Date().toISOString()
        });
        
        this.userSubject.next(response.body.user);
        this.isAuthenticatedSubject.next(true);
        this.lastAuthCheck = Date.now();
        
        console.log('[Auth Debug] User authenticated:', {
          userId: response.body.user.id,
          timestamp: new Date().toISOString(),
          validUntil: new Date(this.lastAuthCheck + (15 * 60 * 1000)).toISOString() // Assuming 15 min expiry
        });
      }),
      catchError(error => {
        console.error('[Auth Debug] Login failed:', {
          status: error.status,
          message: error.error?.message || 'Unknown error',
          timestamp: new Date().toISOString()
        });
        return this.handleError(error);
      }),
      // Extract just the body to maintain backward compatibility
      switchMap(response => of(response.body))
    );
  }
  
  // Helper to convert headers to a loggable object
  private getHeadersAsObject(headers: any): {[key: string]: string} {
    const headersObj: {[key: string]: string} = {};
    headers.keys().forEach((key: string) => {
      headersObj[key] = headers.get(key);
    });
    return headersObj;
  }
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/logout`, {}, { 
      withCredentials: true 
    }).pipe(
      tap(() => {
        this.userSubject.next(null);
        this.isAuthenticatedSubject.next(false);
      }),
      catchError(this.handleError)
    );
  }
  
  
 checkAuthStatus(): Observable<any> {
    console.log('[Auth Debug] Checking auth status...', {
      lastChecked: this.lastAuthCheck ? new Date(this.lastAuthCheck).toISOString() : 'never',
      timeSinceLastCheck: this.lastAuthCheck ? (Date.now() - this.lastAuthCheck) / 1000 + 's' : 'N/A',
      timestamp: new Date().toISOString()
    });
    
    return this.http.get<any>(`${this.apiUrl}/users/me`, {
      withCredentials: true
    }).pipe(
      tap(user => {
        this.userSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        this.lastAuthCheck = Date.now();
        
        console.log('[Auth Debug] Auth check success:', {
          userId: user.id, 
          timestamp: new Date().toISOString(),
          validUntil: new Date(this.lastAuthCheck + (15 * 60 * 1000)).toISOString()
        });
      }),
      catchError(error => {
        this.userSubject.next(null);
        this.isAuthenticatedSubject.next(false);
        
        console.error('[Auth Debug] Auth check failed:', {
          status: error.status,
          message: error.error?.message || 'Unknown error',
          timestamp: new Date().toISOString()
        });
        
        return throwError(() => new Error('Not authenticated'));
      })
    );
  }
  
  // Add a debug method to inspect cookies (limited by browser security)
  inspectCookies(): void {
    console.log('[Auth Debug] Document cookies:', {
      // This won't show HTTP-only cookies, but might show other cookies
      cookies: document.cookie || 'No accessible cookies',
      timestamp: new Date().toISOString()
    });
    
    // Also check if we need to refresh auth due to timeout
    const timeSinceLastCheck = Date.now() - this.lastAuthCheck;
    const fifteenMinutes = 15 * 60 * 1000;
    
    console.log('[Auth Debug] Auth timeout check:', {
      lastChecked: new Date(this.lastAuthCheck).toISOString(),
      timeSinceLastCheck: (timeSinceLastCheck / 1000).toFixed(1) + 's',
      timeRemaining: ((fifteenMinutes - timeSinceLastCheck) / 1000).toFixed(1) + 's',
      shouldRefresh: timeSinceLastCheck > fifteenMinutes,
      timestamp: new Date().toISOString()
    });
  }
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
  
  /**
   * Get user role based on the current user object
   */
  getUserRole(): string {
    const user = this.userSubject.value;
    if (!user) return '';
    
    const roleId = user.roleId;
    return this.roleMap[roleId] || '';
  }
  
  /**
   * Convert role name to ID
   */
  getRoleIdByName(roleName: string): number {
    return this.roleNameMap[roleName] || 0; // fallback if unknown
  }
  
  /**
   * Handle HTTP errors
   */
  private handleError(error: HttpErrorResponse) {
    console.error('Auth error:', error);
    return throwError(() => new Error(error?.error?.message || 'Authentication error'));
  }
  
  // Role mappings
  private roleMap: { [key: number]: string } = {
    1: 'admin',
    2: 'employer',
    3: 'jobseeker'
  };
  
  private roleNameMap: { [key: string]: number } = {
    admin: 1,
    employer: 2,
    jobseeker: 3
  };
}

function switchMap(arg0: (response: any) => any): import("rxjs").OperatorFunction<import("@angular/common/http").HttpResponse<any>, any> {
  throw new Error('Function not implemented.');
}
