import {async, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {OclTextfieldModule} from "./index";
import {OclTextfield} from "./textfield.component";


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
		let buttonDebugElement = fixture.debugElement.query(By.css('button'));
		expect(buttonDebugElement.nativeElement !== 'undefined');
	});

	it('disables', () => {
		let fixture = TestBed.createComponent(TextfieldTestController);
		let buttonDebugElement = fixture.debugElement.query(By.css('button'));
		fixture.nativeElement.querySelector('#disable').click();
		fixture.detectChanges();
		expect(buttonDebugElement.nativeElement.disabled === true);
	});

	it('enables', () => {
		let fixture = TestBed.createComponent(TextfieldTestController);
		let buttonDebugElement = fixture.debugElement.query(By.css('button'));
		buttonDebugElement.nativeElement.disabled = true;
		fixture.nativeElement.querySelector('#enable').click();
		fixture.detectChanges();
		expect(buttonDebugElement.nativeElement.disabled === false);
	});


	@Component({
		template: `
        <ocl-textfield #input>
            <label ocl-input-label>Default Label</label>
            <input ocl-input type="text" placeholder="Default input"/>
            <span ocl-input-error>Default Error</span>
        </ocl-textfield>
  `
	})
	class TextfieldTestController {

	}
});
