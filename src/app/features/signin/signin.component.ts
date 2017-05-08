import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
	selector: 'entrada-signin',
	templateUrl: './signin.component.html'
})

export class SigninComponent implements OnDestroy, OnInit {
	to: Observable<string>;

	constructor(
		private route: ActivatedRoute
	) {

	}

	ngOnInit() {
		// Capture the route to parameter, if available
		this.to = this.route
			.queryParams
			.map(params => params['to'] || undefined);
	}

	ngOnDestroy() {

	}
}
