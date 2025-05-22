import { createReducer, on } from '@ngrx/store';
import { UserState } from './User.State';
import {
  addUserSuccess,
  deleteUserSuccess,
  getUser,
  getUserSuccess,
  loadUserSuccess,
  resetUser,
} from './User.Actions';

const _UserReducer = createReducer(
  UserState,
  on(loadUserSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      erromessage: '',
    };
  }),

  on(addUserSuccess, (state, action) => {
    const _newdata = { ...action.inputdata };
    return {
      ...state,
      list: [...state.list, _newdata],
      errormessage: '',
    };
  }),

  on(getUserSuccess, (state, action) => {
    return {
      ...state,
      userobj: action.obj,
      errormessage: '',
    };
  }),
  on(deleteUserSuccess, (state, action) => {
    const _newdata = state.list.filter((o) => o.id !== action.code);

    return {
      ...state,
      list: _newdata,
      errormessage: '',
    };
  }),

  on(resetUser, (state) => ({ ...state, user: null }))
);

export function userReducer(state: any, action: any) {
  return _UserReducer(state, action);
}
