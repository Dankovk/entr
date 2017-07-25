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
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#empty'));
		expect(assignmentActivityDebugElement.nativeElement !== 'undefined');
	});

	it('renders with name and date', () => {
		let fixture = TestBed.createComponent(TestApp);
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#nameAndDate'));
		let nameText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-name');
		let dateText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-date');
		console.log(dateText, nameText);
		expect(nameText === 'name');
		expect(dateText === 'date');
	});

	it('renders complete', () => {
		let fixture = TestBed.createComponent(TestApp);
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#complete'));
		let nameText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-name').textContent;
		let dateText = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__header-date').textContent;
		let activity = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-student-card__activity-item').length;
		console.log(assignmentActivityDebugElement.nativeElement);
		expect(nameText === 'name');
		expect(dateText === 'date');
		expect(activity === 2);
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
