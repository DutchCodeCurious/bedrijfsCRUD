import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectToken } from './state/auth.Selectors';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(selectToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) return next.handle(req);
        const cloned = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
        return next.handle(cloned);
      })
    );
  }
}
