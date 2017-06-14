import {Component, ChangeDetectionStrategy, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'ocl-webinar-card',
    templateUrl: './webinar-card.component.html',
    styleUrls: ['./webinar-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})

export class OclWebinarCard {
}
;