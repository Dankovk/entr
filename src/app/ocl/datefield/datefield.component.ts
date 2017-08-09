import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-datefield',
	templateUrl: './datefield.component.html',
	styleUrls: ['./datefield.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclDatefieldComponent {
	date: Date;
};
