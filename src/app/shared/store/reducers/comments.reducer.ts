import { IComments } from "./../../models/comments";
import { CommentsAction, CommentsTypeAction } from '../actions/comments.action';

export interface CommentsState {
  comments: IComments[];
  loading: boolean;
}

export const initialState: CommentsState = {
  comments: [],
  loading: false
};

export function commentsReducer(state:CommentsState = initialState, action: CommentsAction ): CommentsState{
  switch (action.type){
    case (CommentsTypeAction.LOAD_COMMENTS):
      return {
        ...state,
        loading: true
      };
    case (CommentsTypeAction.LOAD_COMMENTS_ERROR):
      return {
        ...state,
        loading: false
      }
    case (CommentsTypeAction.LOAD_COMMENTS_SUCCESS):
      return {
        ...state,
        loading: false,
        comments: action.payload
      }
  }
  return state;
}
