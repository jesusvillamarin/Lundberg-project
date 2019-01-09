import { IUser } from "./../../../models/user";
import { UsersActionTypes, UsersActions } from "../actions/users.action";

export interface UsersState {
  users: IUser[];
  loading: boolean;
  user: IUser
}

export const initialState: UsersState = {
  users: [],
  user: {},
  loading: false
};

export function UsersReducer(state: UsersState = initialState, action: UsersActions): UsersState {
  switch (action.type) {
    case UsersActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case UsersActionTypes.LOAD_USERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case UsersActionTypes.LOAD_USERS_SUCCES:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UsersActionTypes.LOAD_SPECIFIC_USER:
      return {
        ...state,
        user: state.users.find(user => user.id === parseInt(action.payload))
      }

  }
  return state;
}
