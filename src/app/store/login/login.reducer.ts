import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './login.actions';
import { auth } from 'src/app/shared/models/auth.model';

export interface LoginState {
  error: string | null;
  isLoading: boolean;
  isAuth: boolean;
}

const initialState: LoginState = {
  error: null,
  isLoading: false,
  isAuth: false
};

export const loginReducer = createReducer(initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state) => ({ ...state,error : null, isAuth:true , isLoading: false })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isAuth: false ,isLoading: false })),
  on(logout,(state)=> ({
    ...state, isAuth : false
  }))
);