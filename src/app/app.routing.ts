/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { NotFound404Component } from './not-found404.component';
import { AuthGuard } from './services/auth-guard.service';

// Protected routes
import { ProtectedModule } from './features/protected/protected.module';

// Public routes
import { SigninModule } from './features/public/signin/signin.module';
import { RecoverPasswordModule } from './features/public/recoverpassword/recoverpassword.module';

export const routes: Routes = [
	{ path: '',
		pathMatch: 'full',
		canActivate: [AuthGuard],
		loadChildren: () => ProtectedModule
	},
	{ path: 'signin',
		loadChildren: () => SigninModule
	},
	{
		path: 'changepassword',
		loadChildren: () => RecoverPasswordModule
	},
	{ path: '**', component: NotFound404Component }
];
