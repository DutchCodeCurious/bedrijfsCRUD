// src/app/auth/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.Actions';

import { User } from '../auth.service';

export interface AuthState {
  user: User | null;
  token: string | null;
  error: any;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AuthActions.logout, () => initialAuthState)
);
