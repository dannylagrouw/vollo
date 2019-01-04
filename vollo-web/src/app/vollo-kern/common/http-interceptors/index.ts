import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnauthorizedHttpInterceptor } from './unauthorized-http.interceptor';
import { LoadingHttpInterceptor } from './loading-http.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedHttpInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingHttpInterceptor, multi: true }
];
