import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';
import { Role, SignatureStatus } from 'src/app/shared/models/user.mode';

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
  (state) => state.isAuth
)

export const selectIsAdmin = createSelector(
  selectLogin,
  (state) =>
    state.user.roles?.includes(Role.ADMIN)
)

export const selectUserSignature = createSelector(
  selectLogin,
  (state) =>
    state.user.signatureStatus === SignatureStatus.APROVED
)