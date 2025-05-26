import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.Actions';
import { AuthService } from '../auth.service';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((res) =>
            AuthActions.loginSuccess({ user: res.user, token: res.accessToken })
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  clearStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('accessToken');
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
