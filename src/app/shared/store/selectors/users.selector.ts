import { UsersState } from './../reducers/users.reducer';
import { AppState } from './../index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getUsersState = createFeatureSelector<AppState, UsersState>('users');

const getLoading = createSelector(getUsersState, (state: UsersState) => state.loading);
const getUsers = createSelector(getUsersState, (state: UsersState) => state.users);
const getIdUser = createSelector(getUsersState, (state:UsersState) => state.id);

const getUserById = createSelector(getUsers, getIdUser,
  (users, id) =>  users.find(u => u.id  === parseInt(id)))

export default {
  getLoading,
  getUsers,
  getUserById
};

