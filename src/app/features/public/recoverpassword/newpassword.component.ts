import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
	templateUrl: './newpassword.component.html'
})

export class NewPasswordComponent implements OnDestroy, OnInit {
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
