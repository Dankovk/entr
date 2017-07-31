import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ElementRef} from "@angular/core";

@Component({
	selector: 'ocl-account-menu, div[ocl-account-menu]',
	templateUrl: './account-menu.component.html',
	styleUrls: ['./account-menu.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'(document:click)': 'onClickOutside($event)',
	},
})

export class OclAccountMenu {
	@Input() name;
	tooltipVisible = false;

	constructor(private _eref: ElementRef) {
	}

	toggleTooltip() {
		this.tooltipVisible = !this.tooltipVisible;
	}

	hideTooltip() {
		this.tooltipVisible = false;
	}

	onClickOutside(event) {
		if (!this._eref.nativeElement.contains(event.target)) {
			this.hideTooltip();
		}
	}
}
