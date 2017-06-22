import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../../../../modules/transfer-http/transfer-http';
import {select} from "@angular-redux/store";
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

interface QueryResponse  {
	User: Object
}

const CurrentUserForProfile = gql`
  query {
    User (id: "cj2z1m9rtmojg01749i36wspj"){
      level
      email
      name
    }
  }
`;

const Webinars = gql`
  query {
    Event {
      endDate
      text
      title
    }
  }
`;

@Component({
	selector: 'entrada-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';
	webinars: any;
	constructor(
		private http: TransferHttp,
		private apollo: Apollo
	) {}

	ngOnInit() {
		this.apollo.watchQuery<QueryResponse>({
			query: CurrentUserForProfile,
		}).subscribe(({data}) => {
			this.user = data.User;
		});
		this.apollo.watchQuery<QueryResponse>({
			query: Webinars,
		}).subscribe(({data}) => {
			this.webinars = data.User;
		});
	}

	ngOnDestroy() {
		this.destroyed$.next();
	}
}
