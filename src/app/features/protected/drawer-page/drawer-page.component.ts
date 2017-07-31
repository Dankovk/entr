import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";



@Component({
	selector: 'entrada-drawer-page',
	templateUrl: './drawer-page.component.html',
	styleUrls: ['./drawer-page.component.css']
})

export class DrawerPageComponent implements OnDestroy, OnInit {
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
