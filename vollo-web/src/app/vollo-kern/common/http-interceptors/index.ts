import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnauthorizedHttpInterceptor } from './unauthorized-http.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedHttpInterceptor, multi: true }
];
