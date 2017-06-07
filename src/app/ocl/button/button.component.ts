import {Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, OnDestroy} from "@angular/core";

@Component({
    selector: 'ocl-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})

export class OclButton implements OnDestroy {
    constructor(private _elementRef: ElementRef) {};

    ngOnDestroy() {

    }

    _getHostElement() {
        return this._elementRef.nativeElement.getElementsByTagName("button")[0];
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
}