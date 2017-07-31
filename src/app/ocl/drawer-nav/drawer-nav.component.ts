import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-drawer-nav, div[ocl-drawer-nav]',
	templateUrl: './drawer-nav.component.html',
	styleUrls: ['./drawer-nav.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclDrawerNav {
	@Input() name;
};
