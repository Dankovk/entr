import { async, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
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
		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('.ocl-assignment-activity'));
		const elem = assignmentActivityDebugElement.nativeElement;
		console.log(assignmentActivityDebugElement.nativeElement);
		expect(assignmentActivityDebugElement.nativeElement !== 'undefined');
	});
});

@Component({
	selector: 'test-app',
	template: `
	<ocl-assignment-activity #empty></ocl-assignment-activity>
	<ocl-assignment-activity #withDescription>
		<h1>description</h1>
	</ocl-assignment-activity>
	<ocl-assignment-activity #withTitle></ocl-assignment-activity>
	<ocl-assignment-activity #withShowMore></ocl-assignment-activity>
	<ocl-assignment-activity #withIcon></ocl-assignment-activity>
	<ocl-assignment-activity #complete></ocl-assignment-activity>
	`
})
class TestApp {}
