import {async, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {OclTextfieldModule} from "./textfield.module";


describe('Ocl textfield', function () {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				OclTextfieldModule,
			],
			declarations: [
				TextfieldTestController
			],
		});

		TestBed.compileComponents();
	}));

	it('renders', () => {
		let fixture = TestBed.createComponent(TextfieldTestController);
		let buttonDebugElement = fixture.debugElement.query(By.css('input'));
		expect(buttonDebugElement.nativeElement !== 'undefined');
	});

	it('disables', () => {
		let fixture = TestBed.createComponent(TextfieldTestController);
		let buttonDebugElement = fixture.debugElement.query(By.css('input'));
		fixture.nativeElement.querySelector('#disable').click();
		fixture.detectChanges();
		expect(buttonDebugElement.nativeElement.disabled).toBe(true);
	});

	it('enables', () => {
		let fixture = TestBed.createComponent(TextfieldTestController);
		let buttonDebugElement = fixture.debugElement.query(By.css('input'));
		buttonDebugElement.nativeElement.disabled = true;
		fixture.nativeElement.querySelector('#enable').click();
		fixture.detectChanges();
		expect(buttonDebugElement.nativeElement.disabled).toBe(false);	});


	@Component({
		template: `
        <ocl-textfield #input>
            <input ocl-input type="text" placeholder="Default input"/>
            <span ocl-input-error>Default Error</span>
        </ocl-textfield>
				<div id="disable" (click)="input.disable()"></div>
				<div id="enable" (click)="input.enable()"></div>
  `
	})
	class TextfieldTestController {

	}
});
