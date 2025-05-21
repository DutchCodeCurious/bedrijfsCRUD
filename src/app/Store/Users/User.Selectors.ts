import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from '../model/user.model';
import { Certificate } from 'crypto';
import { create } from 'domain';
import { get } from 'http';

const getuserstate = createFeatureSelector<UserModel>('user');

export const getUserlist = createSelector(
  getuserstate,
  (state) => state?.list ?? []
);

export const getuser = createSelector(getuserstate, (state) => {
  return state?.userobj;
});
