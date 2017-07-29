import { async, TestBed } from "@angular/core/testing";
import { Component, ContentChild, ElementRef, AfterContentInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OclStudentAssignmentCardModule } from "./student-assignment-card.module";


describe('Ocl Student Assignment Card component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [OclStudentAssignmentCardModule],
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

	it('renders with assigned, due, title, assignmentItems, notes', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#assigned_due_title_assignmentItems_notes'));
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
	<ocl-student-assignment-card id="empty"></ocl-student-assignment-card>
	<ocl-student-assignment-card *ngFor="let studentAssignmentCard of [{title:'Assignment Title', assigned:'11/22/17', due:'11/22/17', assignmentItems: [{title:'Anatomy and Piano Playing', detail:'3 Videos (4:46)'},{title:'Anatomy and Piano Playing 2', detail:'3 Videos (4:46)'}], notes: 'Mime the up-down movement of the wrist, as you allow your fingers to stay at rest while your upper arm moves slightly forward and backward.  This is an extension of the basic, natural hand position found when you draw your hand up from your side.' }]"
								[title]="studentAssignmentCard.title"
								[assigned]="studentAssignmentCard.assigned"
								[due]="studentAssignmentCard.due"
								[assignmentItems]="studentAssignmentCard.assignmentItems"
								[notes]="studentAssignmentCard.notes"
								id="assigned_due_title_assignmentItems_notes">
	</ocl-student-assignment-card>`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;
	ngAfterContentInit() {
		console.log(this.description);
	}
}
