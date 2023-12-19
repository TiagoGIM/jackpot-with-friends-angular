import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './login.actions';
import { auth } from 'src/app/shared/models/auth.model';

export interface LoginState {
  token: auth | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: LoginState = {
  token: null,
  error: null,
  isLoading: false
};

export const loginReducer = createReducer(initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { token }) => ({ ...state,error : null, token, isLoading: false })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
);