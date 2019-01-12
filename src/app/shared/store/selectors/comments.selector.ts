import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../index';
import { CommentsState  } from '../reducers/comments.reducer';

const getCommentsState = createFeatureSelector<AppState, CommentsState>('comments');

const getComments = createSelector(getCommentsState, (state: CommentsState) => state.comments);
const getLoading = createSelector(getCommentsState, (state:CommentsState) => state.loading);

export default {
  getComments,
  getLoading
}
