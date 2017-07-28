import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	Input
} from "@angular/core";

@Component({
	selector: 'ocl-watch-event, div[ocl-watch-event]',
	templateUrl: './watch-event.component.html',
	styleUrls: ['./watch-event.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
	


export class OclWatchEvent {
	@Input() image: string;
	@Input() imageText: string;
	@Input() title: string;
	@Input() titleLink: string;
	@Input() subTitle: string;
	@Input() subTitleLink: string;
	@Input() detail: string;
	@Input() watchEvents: any;

};
