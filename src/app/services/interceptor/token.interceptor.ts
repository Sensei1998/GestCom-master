import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    console.log(request)
    if (token !== null) {
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      })
      return next.handle(clone).pipe(
        catchError(error => {
          console.log(error);
          if (error.status === 500) {
            this.tokenService.clearToken();
          }
          return throwError('La session a expiré. Veuillez vous reconnecter!!!!!!')
        })
      )
    }

    return next.handle(request);
  }
}

export const TokenIntercepTorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
