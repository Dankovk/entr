import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {RepertoireLibraryService} from "./repertoire-library.service";
import gql from "graphql-tag";



@Component({
	selector: 'entrada-skill-library',
	templateUrl: './repertoire-library.component.html',
	styleUrls: ['./repertoire-library.component.css']
})

export class RepertoireLibraryComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';
	skillLibrary: any = {};
	studentActivity: any;

	constructor(private service: RepertoireLibraryService) {
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
