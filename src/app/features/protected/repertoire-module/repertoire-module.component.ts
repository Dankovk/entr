import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {RepertoireModuleService} from "./repertoire-module.service";
import gql from "graphql-tag";



@Component({
	selector: 'entrada-repertoire-page',
	templateUrl: './repertoire-module.component.html',
	styleUrls: ['./repertoire-module.component.css']
})

export class RepertoireModuleComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	user: any = '';

	constructor(private service: RepertoireModuleService) {
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
