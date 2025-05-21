import { createReducer, on } from '@ngrx/store';
import { UserState } from './User.State';
import { addUserSuccess, loadUserSuccess } from './User.Actions';

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
    _newdata.id = (state.list.length + 1).toString();
    return {
      ...state,
      list: [...state.list, _newdata],
      errormessage: '',
    };
  })
);

export function userReducer(state: any, action: any) {
  return _UserReducer(state, action);
}
