/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { NotFound404Component } from './not-found404.component';
import { AuthGuard } from './services/auth-guard.service';

// Protected routes
import { ProtectedModule } from './features/protected/protected.module';

// Public routes
import { SigninModule } from './features/public/signin/signin.module';
import { RecoverPasswordModule } from './features/public/recoverpassword/recoverpassword.module';
import { GuilistModule } from './features/public/guilist/guilist.module';


export const routes: Routes = [
	{ path: '',
		canActivate: [AuthGuard],
		loadChildren: () => ProtectedModule
	},
	{ path: 'student-link',
		canActivate: [AuthGuard],
		loadChildren: () => ProtectedModule
	},
	{ path: 'skill-library',
		canActivate: [AuthGuard],
		loadChildren: () => ProtectedModule
	},
	{ path: 'student-assignment',
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
	{
		path: 'guilist',
		loadChildren: () => GuilistModule
	},
	{ path: '**', component: NotFound404Component }
];
