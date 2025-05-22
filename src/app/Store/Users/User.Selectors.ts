import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from '../model/user.model';

const getuserstate = createFeatureSelector<UserModel>('user');

export const getUserlist = createSelector(
  getuserstate,
  (state) => state?.list ?? []
);

export const getuser = createSelector(getuserstate, (state) => {
  return state?.userobj;
});

//TEST
export const selectUsersByName = (name: string) =>
  createSelector(getuserstate, (state) =>
    state.list.filter((user: any) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    )
  );
