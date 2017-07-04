import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {SkillLibraryService} from "./skill-library.service";
import gql from "graphql-tag";

const studentAssignmentActivity = gql`
	query {
		AssignmentHistoryEntry (id: "cj2z1m9rtmojg01749i36wspj") {
			lastEventDate
		}
	}
`;

@Component({
	selector: 'entrada-skill-library',
	templateUrl: './skill-library.component.html',
	styleUrls: ['skill-library.component.css']
})

export class SkillLibraryComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';
	skillLibrary: any = {};
	studentActivity: any;

	constructor(private service: SkillLibraryService) {
	}

	ngOnInit() {
		this.service.loadUser().subscribe((data) => {
			this.user = data;
		});
		this.service.loadSkillLibraries().subscribe((data) => {
			this.skillLibrary = data;
		});
		this.service.loadStudentAssignment().subscribe((data) => {
			this.studentActivity = data;
		});
	}

	ngOnDestroy() {
		this.destroyed$.next();
	}
}
