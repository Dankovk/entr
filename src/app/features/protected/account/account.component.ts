import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {AccountService} from "./account.service";
import gql from "graphql-tag";



@Component({
	selector: 'entrada-account-page',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';

	constructor(private service: AccountService) {
	}

	ngOnInit() {
		this.service.loadUser().subscribe((data) => {
			this.user = data;
		});
	}

	ngOnDestroy() {
		this.destroyed$.next();
	}
}
