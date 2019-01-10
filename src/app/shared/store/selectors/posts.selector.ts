import { PostsState } from '../reducers/posts.reducer';
import { AppState } from "./../index";
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getPostsState = createFeatureSelector<AppState, PostsState>('posts');

const getLoading = createSelector(getPostsState, (state: PostsState) => state.loading);
const getPosts = createSelector(getPostsState, (state: PostsState) => state.posts );

export default{
  getLoading,
  getPosts
}
