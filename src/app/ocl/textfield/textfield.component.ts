import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, Self, Optional, OnInit} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm} from '@angular/forms';

@Component({
	selector: 'ocl-textfield',
	templateUrl: './textfield.component.html',
	styleUrls: ['./textfield.component.css'],
	host: {
		'[id]': 'id',
		'[placeholder]': 'placeholder',
		'[disabled]': 'disabled',
		'[required]': 'required'
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None

})

export class OclTextfield {

	private _disabled = false;
	private _required = true;
	private _focused = false;
	private _id: string;
	private _cachedUid: string;

	@Input()
	get disabled() {
		return this._ngControl ? this._ngControl.disabled : this._disabled;
	}
	set disabled(value: any) {
		this._disabled = value ? true : false;
		console.log(value);
	}
	//
	// /** Whether the element is required. */
	// @Input()
	// get required() { return this._required; }
	// set required(value: any) { this._required = value; }

	constructor(private _elementRef: ElementRef,
	@Optional() @Self() public _ngControl: NgControl,
	@Optional() private _parentForm: NgForm) {

	}

	_getHostElement() {
		return this._elementRef.nativeElement.getElementsByTagName("input")[0];
	}

	focus(): void {
		this._getHostElement().focus();
		this._focused = true;
	}
	
	blur(): void {
		this._getHostElement().blur();
		this._focused = false;
	}

	required(): void {
		this._getHostElement().required = !this._required;
	}

}