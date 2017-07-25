import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-student-card, div[ocl-student-card]',
	templateUrl: './student-card.component.html',
	styleUrls: ['./student-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclStudentCard {
	@Input() name;
	@Input() date;
	@Input() activities;
	@Input() assignmentLink;
	open: boolean = false;

	toggleMoreActivity() {
		this.open = !this.open;
	}
};
