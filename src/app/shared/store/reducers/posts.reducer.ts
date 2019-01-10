import { IPosts } from "../../models/posts";
import { PostsAction, PostsActionsType } from "../actions/posts.action";

export interface PostsState {
  posts?: IPosts[]
  loading: boolean;
}

export const initialState: PostsState = {
  posts : [],
  loading: false
};

export function PostsReducer(state: PostsState = initialState, action: PostsAction): PostsState {
  switch (action.type) {
    case PostsActionsType.LOAD_POSTS:
      return state;
    case PostsActionsType.LOAD_POSTS_ERROR:
      return {
        ...state,
        loading: false
      };
    case PostsActionsType.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
  }
  return state;
}
