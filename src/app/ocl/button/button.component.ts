import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    ElementRef,
    OnDestroy,
    Directive,
    Renderer2
} from "@angular/core";


@Directive({
    selector: 'button[ocl-button]',
    host: {'class': 'ocl-button'}
})

export class OclButtonDirective {};

@Directive({
    selector: 'button[ocl-button-large]',
    host: {'class': 'ocl-button ocl-button--large ocl-button--round-left'}
})

export class OclButtonLargeDirective {};

@Component({
    selector: 'button[ocl-button], button[ocl-button-large]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})


export class OclButton implements OnDestroy {
    private loading: boolean;
    
    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer2) {
        this.loading = false;
    };
    
    ngOnDestroy() {
        
    }
    
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    
    focus(): void {
        this._getHostElement().focus();
    }
    
    disable(): void {
        this._getHostElement().disabled = true;
    }
    
    enable(): void {
        this._getHostElement().disabled = false;
    }
    
    isDisabled(): boolean {
        return this._getHostElement().disabled;
    }
    
    isLoading(): boolean {
        return this.loading;
    }
    
    showSpinner(): void {
        this.loading = true;
        this._renderer.addClass(this._getHostElement(), `ocl-button--loading`);
        this._renderer.addClass(this._getHostElement(), `ocl-button--add-loader`);
    }
    
    hideSpinner(): void {
        this.loading = false;
        this._renderer.removeClass(this._getHostElement(), `ocl-button--loading`);
        this._renderer.removeClass(this._getHostElement(), `ocl-button--add-loader`);
    }
    
}