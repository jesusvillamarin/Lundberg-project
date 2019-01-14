import { IPosts } from "../../models/posts";
import { PostsAction, PostsActionsType } from "../actions/posts.action";

export interface PostsState {
  posts?: IPosts[];
  loading: boolean;
  id: any;
}

export const initialState: PostsState = {
  posts : [],
  loading: false,
  id: undefined
};

export function postsReducer(state: PostsState = initialState, action: PostsAction): PostsState {
  switch (action.type) {
    case PostsActionsType.LOAD_POSTS:
      return {
        ...state,
        loading: true,
        id: action.payload
      };
    case PostsActionsType.LOAD_POSTS_ERROR:
      return {
        ...state,
        loading: action.payload
      };
    case PostsActionsType.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case PostsActionsType.LOAD_ID_POST:
      return {
        ...state,
        loading:false,
        id: action.payload
      }
  }
  return state;
}
