import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { catchError, exhaustMap, map, mergeMap, of, switchMap } from 'rxjs';
import { OrderService } from '../../services/order.service';
import {
  createOrder,
  createOrderFail,
  createOrderSuccess,
  loadOrders,
  loadOrdersFail,
  loadOrdersSuccess,
} from './order.Actions';
import { showalert } from '../common/App.Actions';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),
      exhaustMap((action) => {
        return this.orderService.getALL().pipe(
          map((data) => {
            return loadOrdersSuccess({ orders: data });
          }),
          catchError((error) => of(loadOrdersFail({ error: error.message })))
        );
      })
    )
  );

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
