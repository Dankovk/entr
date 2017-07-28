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

	it('renders with image, title, subTitle, detail', () => {
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
	<div ocl-watch-event *ngFor="let watchEvent of [{image: 'http://placehold.it/188x106', imageText: 'alt Image Text', title: 'watchevent', titleLink: 'http://placehold.it/188x106', subTitle: 'watch event subTitle', subTitleLink: 'http://placehold.it/188x106', detail: 'some Watch Event detail'}, {image: 'http://placehold.it/188x106', imageText: 'alt Image Text', title: 'watchevent2', titleLink: 'http://placehold.it/188x106', subTitle: 'watch event subTitle', subTitleLink: 'http://placehold.it/188x106', detail: 'some Watch Event detail'}];  let i = index;"
								[image]="watchEvent.image"
								[imageText]="watchEvent.imageText"
								[title]="watchEvent.title"
								[titleLink]="watchEvent.titleLink"
								[subTitle]="watchEvent.subTitle"
								[subTitleLink]="watchEvent.subTitleLink"
								[detail]="watchEvent.detail" id="image_title_subtitle_details">
						</div>`
})
class TestApp implements AfterContentInit{
	@ContentChild("withDescription") description: ElementRef;
	ngAfterContentInit() {
		console.log(this.description);
	}
}
