import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-assignment-card, div[ocl-assignment-card]',
	templateUrl: './assignment-card.component.html',
	styleUrls: ['./assignment-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclAssignmentCard {
	@Input() name;
	@Input() date;
	@Input() events;
};
