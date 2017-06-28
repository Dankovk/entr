import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {StudentLinkService} from "./student-link.service";
import gql from "graphql-tag";

const studentAssignmentActivity = gql`
	query {
		AssignmentHistoryEntry (id: "cj2z1m9rtmojg01749i36wspj") {
			lastEventDate
		}
	}
`;

@Component({
	selector: 'entrada-student-link',
	templateUrl: './student-link.component.html',
	styleUrls: ['student-link.component.css']
})

export class StudentLinkComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';
	studentLink: any = {};
	studentActivity: any;

	constructor(private service: StudentLinkService) {
	}

	ngOnInit() {
		this.service.loadUser().subscribe((data) => {
			this.user = data;
		});
		this.service.loadStudentLinks().subscribe((data) => {
			this.studentLink = data;
		});
		this.service.loadStudentAssignment().subscribe((data) => {
			this.studentActivity = data;
		});
	}

	ngOnDestroy() {
		this.destroyed$.next();
	}
}
