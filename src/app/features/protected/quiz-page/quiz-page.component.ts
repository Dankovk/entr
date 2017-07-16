import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {QuizPageService} from "./quiz-page.service";
import gql from "graphql-tag";



@Component({
	selector: 'entrada-quiz-page',
	templateUrl: './quiz-page.component.html',
	styleUrls: ['./quiz-page.component.css']
})

export class QuizPageComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';

	constructor(private service: QuizPageService) {
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
