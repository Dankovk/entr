import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-quiz-card, div[ocl-quiz-card]',
	templateUrl: './quiz-card.component.html',
	styleUrls: ['./quiz-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclQuizCard {
	@Input() name;
	@Input() status;
};