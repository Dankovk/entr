import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, Self, Optional, OnInit} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm} from '@angular/forms';

@Component({
	selector: 'ocl-textfield',
	templateUrl: './textfield.component.html',
	styleUrls: ['./textfield.component.css'],
	host: {
		'(blur)': '_onBlur()',
		'(focus)': '_onFocus()'
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None

})

export class OclTextfield {

	private _disabled = false;
	private _required = false;
	private _id: string;
	private _cachedUid: string;

	/** Whether the element is focused or not. */
	focused = false;

	@Input()
	get disabled() {
		return this._ngControl ? this._ngControl.disabled : this._disabled;
	}

	set disabled(value: any) {
		this._disabled = value;
	}

	constructor(private _elementRef: ElementRef,
	@Optional() @Self() public _ngControl: NgControl,
	@Optional() private _parentForm: NgForm) {

	}

	/** Focuses the input element. */
	focus() { this._elementRef.nativeElement.focus(); }

	_onFocus() { this.focused = true; console.log('focus!!')}

	_onBlur() { this.focused = false; }

}