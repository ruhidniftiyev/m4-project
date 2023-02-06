import { ADD_MOVIE, ADD_MOVIES, ADD_SAVED } from '../constants';

export const addFavoriteMovieAction = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});
export const addAllMovieAction = (movies) => ({
  type: ADD_MOVIES,
  payload: movies,
});
export const addSavedMovieAction = (movies) => ({
  type: ADD_SAVED,
  payload: movies,
});
