import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclCheckboxComponent {
	@Input() label;
	checked: boolean = false;

	check() {
		this.checked = true;
	}

	uncheck() {
		this.checked = false;
	}

	toggle() {
		this.checked = !this.checked;
	}
};
