import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.Reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);

export const selectIsLoggedIn = createSelector(
  selectToken,
  (token) => !!token // true als er een token is
);
