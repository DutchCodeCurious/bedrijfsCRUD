import { createAction, props } from '@ngrx/store';

export const SHOW_ALERT = '[app] Show Alert';
export const EMPTY_ACTION = '[app] Empty Action';

export const showalert = createAction(
  SHOW_ALERT,
  props<{ message: string; resulttype: string }>()
);
export const emptyaction = createAction(EMPTY_ACTION);
