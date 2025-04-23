import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class TokenService {
    constructor() {}
  
    // Example method to get the access token from storage
    getAccessToken(): string | null {
      return localStorage.getItem('access_token');
    }
  
    // You could add more methods to handle token expiration, etc.
  }
  