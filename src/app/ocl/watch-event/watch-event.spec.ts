import { async, TestBed } from "@angular/core/testing";
import { Component, ContentChild, ElementRef, AfterContentInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OclWatchEventModule } from "./watch-event.module";


describe('Ocl Watch Event component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [OclWatchEventModule],
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

		let assignmentActivityDebugElement = fixture.debugElement.query(By.css('#image_title_subtitle_details'));
		let eventImage = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-watch-event__image').textContent.trim();
		let eventTitle = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-watch-event__title').textContent.trim();
		let eventSubtitle = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-watch-event__subtitle').textContent.trim();
		let eventDetails = assignmentActivityDebugElement.nativeElement.querySelector('.ocl-watch-event__detail').textContent.trim();

		expect(eventImage).toBe('image');
		expect(eventTitle).toBe('title');
		expect(eventSubtitle).toBe('subTitle');
		expect(eventDetails).toBe('detail');
	});

});

@Component({
	selector: 'test-app',
	template: `
	<div ocl-student-card id="empty"></div>
	<div ocl-watch-event 
								[image]="'image'"
								[imageText]="'imageText'"
								[title]="'title'"
								[titleLink]="'titleLink'"
								[subTitle]="'subTitle'"
								[subTitleLink]="'subTitleLink'"
								[detail]="'detail'" 
								id="complete">
						</div>`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;
	ngAfterContentInit() {
		console.log(this.description);
	}
}
