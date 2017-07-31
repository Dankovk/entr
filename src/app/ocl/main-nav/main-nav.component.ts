import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-main-nav, div[ocl-main-nav]',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclMainNav {
	@Input() name;
	@Input() toggleDrawer;

	drawerToggle() {
		this.toggleDrawer();
	}
};
