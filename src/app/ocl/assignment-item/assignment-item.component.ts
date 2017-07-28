import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	Input
} from "@angular/core";

@Component({
	selector: 'ocl-assignment-item',
	templateUrl: './assignment-item.component.html',
	styleUrls: ['./assignment-item.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class OclAssignmentItem {
	@Input() progress: number;
	@Input() title: string;
	@Input() titleLink: string;
	@Input() detail: string;
};
