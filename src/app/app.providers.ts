// import { UserActions } from './user/user.actions';
// import { UserService } from './user/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

export const APP_PROVIDERS = [
	AuthGuard,
	AuthService
  // UserActions,
  // UserService
];
