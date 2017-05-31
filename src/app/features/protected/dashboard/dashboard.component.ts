import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../../../../modules/transfer-http/transfer-http';

@Component({
	selector: 'entrada-dashboard',
	templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();

	constructor(
		private http: TransferHttp,
	) {

	}

	ngOnInit() {

	}

	ngOnDestroy() {
		this.destroyed$.next();
	}
}
