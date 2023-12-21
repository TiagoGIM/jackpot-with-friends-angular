import { createAction, props } from '@ngrx/store';
import { auth } from 'src/app/shared/models/auth.model';
import { User } from 'src/app/shared/models/user.mode';

export const login = createAction(
  '[Login] User Login',
  props<{ user: User }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success'
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string }>()
);


export const signin = createAction(
  '[Signin] User Signin',
  props<{ user: User }>()
);

export const signinSuccess = createAction(
  '[Signin] Signin Success'
);

export const signinFailure = createAction(
  '[Signin] Signin Failure',
  props<{ error: string }>()
)

export const logout = createAction("[Login] Log Out");