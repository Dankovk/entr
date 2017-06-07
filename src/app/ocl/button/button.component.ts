import {Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, OnDestroy, Directive, Renderer2} from "@angular/core";


@Directive({
    selector: 'button[ocl-button]',
    host: {'class': 'ocl-button'}
})

export class OclButtonDirective {};

@Component({
    selector: 'button[ocl-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})


export class OclButton implements OnDestroy {
    private loading: boolean;
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2
    ) {
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

    load(): void {
        this.loading = true;
    }

}