import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Log outgoing requests
    if (request.url.includes('/users/')) {
      console.log('[Auth Debug] Outgoing request:', {
        url: request.url,
        method: request.method,
        withCredentials: request.withCredentials,
        timestamp: new Date().toISOString()
      });
    }
    
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse && event.url?.includes('/users/')) {
            console.log('[Auth Debug] Response received:', {
              url: event.url,
              status: event.status,
              timestamp: new Date().toISOString()
            });
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse && error.url?.includes('/users/')) {
            console.error('[Auth Debug] Request failed:', {
              url: error.url,
              status: error.status,
              message: error.message,
              timestamp: new Date().toISOString()
            });
          }
        }
      })
    );
  }
}