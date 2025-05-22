import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const LOAD_USER = '[User] Load User';
export const LOAD_USER_SUCCESS = '[User] Load User Success';
export const LOAD_USER_FAIL = '[User] Load User Fail';

export const ADD_USER = '[User] Add User';
export const ADD_USER_SUCCESS = '[User] Add User Success';

export const GET_USER = '[User] Get User';
export const GET_USER_SUCCESS = '[User] Get User Success';

export const UPDATE_USER = '[User] Update User';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';

export const DELETE_USER = '[User] Deleted User';
export const DELETE_USER_SUCCESS = '[User] Deleted User Success';

export const RESET_USER = '[User] Reset User';

//LOAD
export const loadUser = createAction(LOAD_USER);
export const loadUserSuccess = createAction(
  LOAD_USER_SUCCESS,
  props<{ list: User[] }>()
);
export const loadUserFail = createAction(
  LOAD_USER_FAIL,
  props<{ error: string }>()
);

//GET
export const getUser = createAction(GET_USER, props<{ id: string }>());
export const getUserSuccess = createAction(
  GET_USER_SUCCESS,
  props<{ obj: User }>()
);

//ADD
export const addUser = createAction(ADD_USER, props<{ inputdata: User }>());
export const addUserSuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ inputdata: User }>()
);

//UPDATE
export const updateUser = createAction(
  UPDATE_USER,
  props<{ inputdata: User }>()
);
export const updateUserSuccess = createAction(
  UPDATE_USER_SUCCESS,
  props<{ inputdata: User }>()
);

//DELETE
export const deleteUser = createAction(DELETE_USER, props<{ code: string }>());
export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  props<{ code: string }>()
);

//RESET
export const resetUser = createAction(RESET_USER);
