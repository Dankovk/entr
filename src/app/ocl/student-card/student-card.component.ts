import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-student-card',
	templateUrl: './student-card.component.html',
	styleUrls: ['./student-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclStudentCard {
	@Input() name;
	@Input() date;
	@Input() events;
};