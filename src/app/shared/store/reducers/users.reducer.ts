import { IUser } from "./../../../models/user";
import { UsersActionTypes, UsersActions } from "../actions/users.action";

export interface UsersState {
  data: IUser[];
  loading: boolean;
}

export const initialState: UsersState = {
  data: [],
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
        data: action.payload,
      };
  }
  return state;
}
