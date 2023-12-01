import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { CsrfService } from './csrf.service';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  constructor(private csrfService: CsrfService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Add the CSRF token to the request headers
    const csrfToken = this.csrfService.getCsrfToken();
    const csrfReq = req.clone({
      setHeaders: {
        'X-XSRF-TOKEN': csrfToken,
      },
    });
    
    return next.handle(csrfReq);
  }
}