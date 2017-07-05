import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {StudentAssignmentDetailService} from "./student-assignment.service";
import gql from "graphql-tag";

const studentAssignmentActivity = gql`
	query {
		AssignmentHistoryEntry (id: "cj2z1m9rtmojg01749i36wspj") {
			lastEventDate
		}
	}
`;

@Component({
	selector: 'entrada-student-assignment',
	templateUrl: './student-assignment.component.html',
	styleUrls: ['student-assignment.component.css']
})

export class StudentAssignmentDetailComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';
	studentLink: any = {};
	studentActivity: any;

	constructor(private service: StudentAssignmentDetailService) {
	}

	ngOnInit() {
		this.service.loadUser().subscribe((data) => {
			this.user = data;
		});
		this.service.loadStudentAssignmentDetails().subscribe((data) => {
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
