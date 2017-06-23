import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '[ocl-tab], ocl-tab',
	styleUrls: ['./tabs.component.css'],
	templateUrl: 'tab.component.html',
	encapsulation: ViewEncapsulation.None
})

export class OclTab {
	@Input('tabTitle') title: string;
	@Input() active = false;
	@Input('disabled') disabled = false;
}