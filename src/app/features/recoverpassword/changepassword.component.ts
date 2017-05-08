import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
	templateUrl: './changepassword.component.html'
})

export class ChangePasswordComponent implements OnDestroy, OnInit {
	to: Observable<string>;

	constructor(
		private route: ActivatedRoute
	) {

	}

	ngOnInit() {

	}

	ngOnDestroy() {

	}
}
