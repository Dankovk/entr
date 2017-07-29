import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	Input
} from "@angular/core";

@Component({
	selector: 'ocl-student-assignment-card',
	templateUrl: './student-assignment-card.component.html',
	styleUrls: ['./student-assignment-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class OclStudentAssignmentCard {
	@Input() title: string;
	@Input() assigned: string;
	@Input() due: string;
	@Input() assignmentItems: any;
	@Input() notes: string;
};
