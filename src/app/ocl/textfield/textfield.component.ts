import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	ElementRef,
	OnDestroy,
	Directive,
	ChangeDetectorRef,
	ContentChild,
	Renderer2
} from "@angular/core";


@Directive({
	selector: 'lable[ocl-input-label]',
	host: {
		'class': 'ocl-input-label'
	}
})

export class OclLabelDirective {
}


@Directive({
	selector: 'span[ocl-input-error]',
	host: {
		'class': 'ocl-input-error'
	}
})

export class OclErrorDirective {
}


@Directive({
	selector: 'input[ocl-input]',
	host: {
		'class': 'ocl-input',
		// '[placeholder]': 'placeholder',
		// '[type]': 'text',
		'[disabled]': 'disabled',
		// '[required]': 'required'
	}
})

export class OclInputDirective {
}


@Component({
	selector: 'ocl-textfield',
	templateUrl: './textfield.component.html',
	styleUrls: ['./textfield.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
	
})

export class OclTextfield implements OnDestroy {
	
	private loading: boolean;
	private _disabled = false;
	private _required = true;
	private _focused = false;
	private _id: string;
	private _cachedUid: string;
	
	
	@ContentChild(OclLabelDirective) _oclLabelChild: OclLabelDirective;
	@ContentChild(OclInputDirective) _oclInputChild: OclInputDirective;
	@ContentChild(OclErrorDirective) _oclErrorChild: OclErrorDirective;
	
	constructor(private _elementRef: ElementRef,
	            private _renderer: Renderer2,
	            private _changeDetectorRef: ChangeDetectorRef) {
		
		this.loading = false;
		
	}
	
	ngOnDestroy() {
		
	}
	
	_getHostElement() {
		return this._elementRef.nativeElement.getElementsByTagName('input')[0];
	}
	
	focus(): void {
		this._getHostElement().focus();
		this._focused = true;
	}
	
	blur(): void {
		this._getHostElement().blur();
		this._focused = false;
	}
	
	disable(): void {
		this._getHostElement().disabled = true;
		this._disabled = true;
	}
	
	enable(): void {
		this._getHostElement().disabled = false;
		this._disabled = false;
	}
	
	load(): void {
		this.loading = true;
	}
	
}