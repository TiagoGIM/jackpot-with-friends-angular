import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

export const selectLogin = createFeatureSelector<LoginState>("login");

export const selectError = createSelector(
  selectLogin,
  (state) => state.error
);

export const selectIsLoading = createSelector(
  selectLogin,
  (state) => state.isLoading
);

export const selectIsAuth = createSelector(
  selectLogin,
  (state)=> state.isAuth
)