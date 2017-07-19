import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { DashboardService } from "./dashboard.service";
import gql from "graphql-tag";

const studentAssignmentActivity = gql`
	query {
		AssignmentHistoryEntry (id: "cj2z1m9rtmojg01749i36wspj") {
			lastEventDate
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
	webinar: any = {};
	studentActivity: any;

	constructor(private service: DashboardService) {}

	ngOnInit() {
		this.service.loadUser().subscribe((data) => {
			this.user = data;
		});
		this.service.loadWebinars().subscribe((data) => {
			this.webinar = data;
		});
		this.service.loadStudentAssignment().subscribe((data) => {
			this.studentActivity = data;
		});
	}

	ngOnDestroy() {
		this.destroyed$.next();
	}
}
