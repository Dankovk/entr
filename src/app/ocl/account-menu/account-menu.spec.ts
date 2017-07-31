import { async, TestBed } from "@angular/core/testing";
import { Component, ContentChild, ElementRef, AfterContentInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OclAccountMenuModule } from "./account-menu.module";


describe('Ocl Account Menu component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [OclAccountMenuModule],
			declarations: [TestApp],
		});

		TestBed.compileComponents();
	}));

	it('renders empty', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let accountMenuDebugElement = fixture.debugElement.query(By.css('#empty'));
		expect(accountMenuDebugElement.nativeElement).toBeDefined();
	});

	it('renders with name', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let accountMenuDebugElement = fixture.debugElement.query(By.css('#name'));
		const name = accountMenuDebugElement.nativeElement.querySelector('.ocl-account-menu__username-type');
		expect(name.textContent.trim()).toBe('Test');
	});

	it('opens and closes', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let accountMenuDebugElement = fixture.debugElement.query(By.css('#tooltip'));
		const toggle = accountMenuDebugElement.nativeElement.querySelector('.ocl-account-menu__toggle');
		toggle.click();
		fixture.detectChanges();
		expect(accountMenuDebugElement.componentInstance.tooltipVisible).toBe(true);

		toggle.click();
		fixture.detectChanges();
		expect(accountMenuDebugElement.componentInstance.tooltipVisible).toBe(false);
	});

});

@Component({
	selector: 'test-app',
	template: `
	<div ocl-account-menu id="empty"></div>
	<div ocl-account-menu id="name" [name]="'Test'"></div>
	<div ocl-account-menu id="tooltip" [name]="'Test'"></div>
	`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;

	ngAfterContentInit() {
		console.log(this.description);
	}
}
