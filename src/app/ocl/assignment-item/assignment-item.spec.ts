import { async, TestBed } from "@angular/core/testing";
import { Component, ContentChild, ElementRef, AfterContentInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OclAssignmentItemModule } from "./assignment-item.module";


describe('Ocl Assignment Item component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [OclAssignmentItemModule],
			declarations: [TestApp],
		});

		TestBed.compileComponents();
	}));

	it('renders empty', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#empty'));
		expect(assignmentActivityDebugElement.nativeElement !== 'undefined');
	});

	it('renders complete', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#complete'));
		let eventTitle = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-assignment-card__list-item-title').textContent.trim();
		let eventDetail = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-assignment-card__list-item-details').textContent.trim();

		expect(eventTitle).toBe('title');
		expect(eventDetail).toBe('detail');
	});

});

@Component({
	selector: 'test-app',
	template: `
	<ocl-assignment-card id="empty"></ocl-assignment-card>
	<ocl-assignment-item 
			                     [title]="'title'"
			                     [detail]="'detail'"
			                     id="complete"></ocl-assignment-item>`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;
	ngAfterContentInit() {
		console.log(this.description);
	}
}
