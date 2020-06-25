import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headersConfig = {
      'content-type': 'application/json',
      accept: 'application/json',
    };

    const user = JSON.parse(localStorage.getItem('userLogin'));

    if (user) {
      headersConfig['Authorization'] = `Bearer ${user.accessToken}`
    }

    const clone = request.clone({
      setHeaders: headersConfig,
    })

    return next.handle(clone);
  }
}
