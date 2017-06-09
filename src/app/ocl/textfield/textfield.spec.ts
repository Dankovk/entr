import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormGroupDirective,
	FormsModule,
	NgForm,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {OclTextfieldModule} from './index';
import {OclTextfield} from './textfield.component';



describe('OclTextfield', function () {
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

	it('should treat text input type as empty at init', () => {
		let fixture = TestBed.createComponent(TextfieldTestController);
		fixture.detectChanges();

		let el = fixture.debugElement.query(By.css('label')).nativeElement;
		expect(el).not.toBeNull();
		expect(el.classList.contains('mat-empty')).toBe(true);
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
	class TextfieldTestController {}