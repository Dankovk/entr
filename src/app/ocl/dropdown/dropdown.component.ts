import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit} from "@angular/core";
import {SelectItem} from 'primeng/primeng';

@Component({
	selector: 'ocl-dropdown, div[dropdown]',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclDropdownComponent implements OnInit{
	options: SelectItem[];
	@Input() elements;
	@Input() withSearch: boolean;

	constructor() {
		this.options = [];
	}

	ngOnInit() {
		this.options = this.elements;
	}

};
