import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './login.actions';
import { User } from 'src/app/shared/models/user.mode';

export interface LoginState {
  error: string | null;
  isLoading: boolean;
  isAuth: boolean;
  user : User

}

const initialState: LoginState = {
  error: null,
  isLoading: false,
  isAuth: false,
  user : {
    email : '',
    signatureStatus: null,
    userName: ''
  }
};

export const loginReducer = createReducer(initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state , {user}) => ({ ...state, error : null, isAuth:true , isLoading: false , user })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isAuth: false ,isLoading: false })),
  on(logout,(state)=> ({
    ...state, isAuth : false, user: { email :'', signature:null, userName:''}
  }))
);