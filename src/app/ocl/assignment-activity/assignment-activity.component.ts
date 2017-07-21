import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-assignment-activity, div[ocl-assignment-activity]',
	templateUrl: './assignment-activity.component.html',
	styleUrls: ['./assignment-activity.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclAssignmentActivity{
	@Input() title;
	@Input() icon;
	@Input() showMore = false;
	detailShown = false;

	toggleDetail() {
		this.detailShown = !this.detailShown;
	}
};
