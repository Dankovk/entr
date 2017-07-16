import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {AccountPageService} from "./account-page.service";
import gql from "graphql-tag";



@Component({
	selector: 'entrada-account-page',
	templateUrl: './account-page.component.html',
	styleUrls: ['./account-page.component.css']
})

export class AccountPageComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';

	constructor(private service: AccountPageService) {
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
