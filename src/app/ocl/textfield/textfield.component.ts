import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';

@Component({
	selector: 'ocl-textfield',
	templateUrl: './textfield.component.html',
	styleUrls: ['./textfield.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None

})

export class OclTextfield { }