import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	Input
} from "@angular/core";

@Component({
	selector: 'ocl-assignment-card',
	templateUrl: './assignment-card.component.html',
	styleUrls: ['./assignment-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class OclAssignmentCard {
	@Input() title: string;
	@Input() assigned: string;
	@Input() due: string;
	@Input() completed: string;
	@Input() assignmentItems: any;
};
