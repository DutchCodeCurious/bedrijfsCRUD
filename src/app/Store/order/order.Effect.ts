import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { OrderService } from '../../services/order.service';
import {
  createOrder,
  createOrderFail,
  createOrderSuccess,
} from './order.actions';
import { showalert } from '../common/App.Actions';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrder),
      switchMap(({ order }) =>
        this.orderService.Create(order).pipe(
          switchMap((savedOrder) =>
            of(
              createOrderSuccess({ order: savedOrder }),
              showalert({
                message: 'Order created successfully',
                resulttype: 'pass',
              })
            )
          ),
          catchError((err) =>
            of(
              createOrderFail({ error: err.message }),
              showalert({
                message: 'Failed to create order',
                resulttype: 'fail',
              })
            )
          )
        )
      )
    )
  );
}
