import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
      })
    );
  }
}
