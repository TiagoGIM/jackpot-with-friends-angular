import { createAction, props } from '@ngrx/store';
import { auth } from 'src/app/shared/models/auth.model';
import { User } from 'src/app/shared/models/user.mode';

export const login = createAction(
  '[Login] User Login',
  props<{ user: User }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: auth }>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string }>()
);