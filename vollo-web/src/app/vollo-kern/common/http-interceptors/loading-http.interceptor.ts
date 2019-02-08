import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UiStoreService } from '../../vollo-kern-store';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {
  constructor(private uiStoreService: UiStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.uiStoreService.requestErbij();
    return next.handle(req).pipe(
      tap(response => {
        if (response instanceof HttpResponse) {
          this.uiStoreService.requestEraf();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.uiStoreService.requestEraf();
        return throwError(error);
      })
    );
  }
}
