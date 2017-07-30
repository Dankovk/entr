import { async, TestBed } from "@angular/core/testing";
import { Component, ContentChild, ElementRef, AfterContentInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OclAssignmentCardModule } from "./assignment-card.module";


describe('Ocl Assignment Card component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [OclAssignmentCardModule],
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

	it('renders with assigned', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#assigned'));
		let eventAssigned = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-assignment-card__date--assigned').textContent.trim();

		expect(eventAssigned).toBe('assigned');
	});

	it('renders complete', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#complete'));
		let eventAssigned = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-assignment-card__date--assigned').textContent.trim();
		let eventDue = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-assignment-card__date--due').textContent.trim();
		let eventTitle = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-assignment-card__title').textContent.trim();
		let eventAssignmentItems = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-assignment-card__list-item').textContent.trim();
		let eventNotes = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-assignment-card__footer-content').textContent.trim();

		expect(eventAssigned).toBe('assigned');
		expect(eventDue).toBe('due');
		expect(eventTitle).toBe('title');
		expect(eventAssignmentItems).toBe('assignmentItems');
		expect(eventNotes).toBe('notes');
	});

});

@Component({
	selector: 'test-app',
	template: `
	<ocl-assignment-card id="empty"></ocl-assignment-card>
	<ocl-assignment-card
										[assigned]="'assigned'"
										id="assigned"
						></ocl-assignment-card>
	<ocl-assignment-card
										[title]="'title'"
										[assigned]="'assigned'"
										[due]="'due'"
										[completed]="'completed'"
										[assignmentItems]="'assignmentItems'"
										id="complete"
						></ocl-assignment-card>`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;
	ngAfterContentInit() {
		console.log(this.description);
	}
}
