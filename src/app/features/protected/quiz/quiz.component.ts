import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {QuizService} from "./quiz.service";
import gql from "graphql-tag";



@Component({
	selector: 'entrada-quiz-page',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';

	constructor(private service: QuizService) {
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
