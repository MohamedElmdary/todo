import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const req = request.clone({
            url: 'http://localhost:3000' + request.url,
            /* setHeaders: {
              Authorization: `Bearer ${this.auth.getToken()}`
            } */
        });
        return next.handle(req).pipe(
            catchError(err => {
                return throwError(err.error);
            })
        );
    }
}