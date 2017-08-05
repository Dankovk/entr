import {Component, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {Subject} from "rxjs/Subject";



@Component({
	selector: 'ocl-drawer-page',
	templateUrl: './drawer-page.component.html',
	styleUrls: ['./drawer-page.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class OclDrawerPageComponent implements OnDestroy, OnInit {
	destroyed$: Subject<any> = new Subject<any>();
	drawerNavVisible = false;

	ngOnInit() {
		// not implemeted
	}

	toggleDrawerNav() {
		return () => {
			this.drawerNavVisible = !this.drawerNavVisible;
		}
	}
	ngOnDestroy() {
		this.destroyed$.next();
	}
}
