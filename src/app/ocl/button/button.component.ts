import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
    selector: 'ocl-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})

export class OclButton { }