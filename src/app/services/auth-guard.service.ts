import { Injectable } from '@angular/core';
import {
	CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		let url: string = state.url;

		return this.checkSignin(url);
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.canActivate(route, state);
	}

	checkSignin(url: string): Observable<boolean> {
		return this.authService.isLoggedIn()
			.map(result => result ? true : true
			);
	}
}
