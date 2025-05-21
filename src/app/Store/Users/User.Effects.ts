import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addUser,
  addUserSuccess,
  getUser,
  getUserSuccess,
  loadUser,
  loadUserFail,
  loadUserSuccess,
} from './User.Actions';
import { catchError, exhaust, exhaustMap, map, of, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { showalert } from '../common/App.Actions';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private service: UserService) {}

  loaduser$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadUser),
      exhaustMap((action) => {
        return this.service.getALL().pipe(
          map((data) => {
            console.log('Data ontvangen in effect:', data);
            return loadUserSuccess({ list: data });
          }),
          catchError((error) => of(loadUserFail({ error: error.message })))
        );
      })
    )
  );

  getUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUser),
      exhaustMap((action) => {
        return this.service.GetbyCode(action.id).pipe(
          map((data) => {
            return getUserSuccess({ obj: data });
          }),
          catchError((_error) =>
            of(
              showalert({
                message: 'Failed to fetch data :' + _error.message,
                resulttype: 'fail',
              })
            )
          )
        );
      })
    )
  );

  adduser$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUser),
      exhaustMap((action) => {
        const userWithId = { ...action.inputdata, id: uuidv4() };
        return this.service.Create(userWithId).pipe(
          switchMap((data) => {
            return of(
              addUserSuccess({ inputdata: action.inputdata }),
              showalert({
                message: 'Created successfully ',
                resulttype: 'pass',
              })
            );
          })
        );
      }),
      catchError((error) =>
        of(
          showalert({
            message: 'Failed to create user',
            resulttype: 'fail',
          })
        )
      )
    )
  );
}
