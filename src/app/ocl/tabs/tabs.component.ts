import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	ContentChildren,
	QueryList,
	AfterContentInit
} from "@angular/core";
import {OclTab} from "./tab.component";


@Component({
	selector: 'ocl-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class OclTabs implements AfterContentInit {
	@ContentChildren(OclTab) tabs: QueryList<OclTab>;
	
	ngAfterContentInit() {
		let activeTabs = this.tabs.filter((tab) => tab.active);
		if (activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		}
	}
	
	selectTab(tab: OclTab) {
		this.tabs.toArray().forEach(tab => tab.active = false);
		tab.active = true;
	}
}
