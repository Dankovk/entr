import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {RepertoirePageService} from "./repertoire-page.service";
import gql from "graphql-tag";



@Component({
	selector: 'entrada-repertoire-page',
	templateUrl: './repertoire-page.component.html',
	styleUrls: ['./repertoire-page.component.css']
})

export class RepertoirePageComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';

	constructor(private service: RepertoirePageService) {
	}

	ngOnInit() {
		this.service.loadUser().subscribe((data) => {
			this.user = data;
		});
	}

	ngOnDestroy() {
		this.destroyed$.next();
	}
}
