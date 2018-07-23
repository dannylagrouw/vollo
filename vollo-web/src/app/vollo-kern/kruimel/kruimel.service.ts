import { Injectable } from '@angular/core';
import { Router, Route, Data } from '@angular/router';

@Injectable()
export class KruimelService {
  constructor() {}

  maakKruimelpad(data: Data, router: Router) {
    return (data.kruimels ? ['', ...data.kruimels] : ['']).map(kruimel =>
      router.config.find((r: Route) => {
        return r.path === kruimel;
      })
    );
  }
}
