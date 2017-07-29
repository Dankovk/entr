import { async, TestBed } from "@angular/core/testing";
import { Component, ContentChild, ElementRef, AfterContentInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OclAssignmentActivityModule } from "./assignment-activity.module";


describe('Ocl Assignment Activity component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [OclAssignmentActivityModule],
			declarations: [TestApp],
		});

		TestBed.compileComponents();
	}));

	it('renders empty', () => {
		let fixture = TestBed.createComponent(TestApp);
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#empty'));
		expect(assignmentActivityDebugElement.nativeElement !== 'undefined');
	});
	it('renders with title', () => {
		let fixture = TestBed.createComponent(TestApp);
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#withTitle'));
		const title = assignmentActivityDebugElement.nativeElement.querySelector('h4');
		expect(title.textContent === 'title');
	});

	it('renders with button', () => {
		let fixture = TestBed.createComponent(TestApp);
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#withShowMore'));
		const button = assignmentActivityDebugElement.nativeElement.querySelector('button');
		expect(button !== 'undefined');
	});

	it('renders with icon', () => {
		let fixture = TestBed.createComponent(TestApp);
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#withIcon'));
		const icon = assignmentActivityDebugElement.nativeElement.querySelector('i');
		expect(icon.classList.contains('test') === true);
	});

	it('renders complete', () => {
		let fixture = TestBed.createComponent(TestApp);
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#withIcon'));
		const button = assignmentActivityDebugElement.nativeElement.querySelector('button');
		const icon = assignmentActivityDebugElement.nativeElement.querySelector('i');
		const title = assignmentActivityDebugElement.nativeElement.querySelector('h4');
		expect(icon.classList.contains('test') === true);
		expect(button !== 'undefined');
		expect(title.textContent === 'title');
	});
});

@Component({
	selector: 'test-app',
	template: `
	<div ocl-assignment-activity id="empty"></div>
	<div ocl-assignment-activity [title]="'title'"  id="withTitle"></div>
	<div ocl-assignment-activity [showMore]="true"   id="withShowMore"></div>
	<div ocl-assignment-activity [icon]="'test'"   id="withIcon"></div>
	<div ocl-assignment-activity [title]="'title'" [showMore]="true"  [icon]="'test'" id="complete"></div>
	`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;

	ngAfterContentInit() {
		console.log(this.description);
	}
}