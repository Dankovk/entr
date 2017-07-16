import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";

@Component({
	selector: 'ocl-repertoire-card, div[ocl-repertoire-card]',
	templateUrl: './repertoire-card.component.html',
	styleUrls: ['./repertoire-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclRepertoireCard {
	@Input() title;
	@Input() timing;
	@Input() genres;
};
