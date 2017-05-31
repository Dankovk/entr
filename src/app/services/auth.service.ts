import { Injectable } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/root.types';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

	constructor(
		private ngRedux: NgRedux<IAppState>
	) {}

	loggedIn: boolean = false;

	// store the URL so we can redirect after signing in
	redirectUrl: string;

	isLoggedIn(): Observable<boolean> {
		// return Observable.of(this.loggedIn);
		return this.ngRedux.select<Object>('auth')
			.map(result => result && result['token']);
	}

	signin(): Observable<boolean> {
		return Observable.of(true).delay(1000).do(val => this.loggedIn = true);
	}

	signout(): void {
		this.loggedIn = false;
	}
}
