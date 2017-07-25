import { async, TestBed } from "@angular/core/testing";
import { Component, ContentChild, ElementRef, AfterContentInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OclStudentCardModule } from "./student-card.module";


describe('Ocl Student Card component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [OclStudentCardModule],
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

	it('renders with name and date', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#nameAndDate'));
		let nameText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-name').textContent.trim();
		let dateText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-date').textContent.trim();

		expect(nameText).toBe('name');
		expect(dateText).toBe('date');
	});

	it('renders complete', () => {
		let fixture = TestBed.createComponent(TestApp);
		fixture.detectChanges();

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#complete'));
		let nameText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-name').textContent.trim();
		let dateText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-date').textContent.trim();
		let activity = assignmentActivityDebugElement.nativeElement.querySelectorAll('.ocl-student-card__activity-item').length;

		expect(nameText).toBe('name');
		expect(dateText).toBe('date');
		expect(activity).toBe(2);
	});
});

@Component({
	selector: 'test-app',
	template: `
	<div ocl-student-card id="empty"></div>
	<div ocl-student-card [name]="'name'" [date]="'date'" id="nameAndDate"></div>
	<div ocl-student-card
			 [name]="'name'"
			 [date]="'date'"
			 [activities]="[{item: 'Anatomy of Piano playing', descr: '8 of 10 correct', icon: 'fa-question-circle', title: 'Quiz attempt'}, {item: 'Anatomy of Piano playing second', descr: '8 of 10 correct', icon: 'fa-question-circle', title: 'Quiz attempt'}]" id="complete"></div>
	`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;
	ngAfterContentInit() {
		console.log(this.description);
	}
}
