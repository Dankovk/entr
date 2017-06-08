import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {OclButtonModule} from './index';

describe('Ocl button', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [OclButtonModule],
            declarations: [TestApp],
        });

        TestBed.compileComponents();
    }));

    it('should disable', () => {
        let fixture = TestBed.createComponent(TestApp);

        let testComponent = fixture.debugElement.componentInstance;
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));

        testComponent.disable();
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.disabled.toBe(true));

    });

});


@Component({
    selector: 'test-app',
    template: `
    <button ocl-button #button>
        <span class="ocl-button__label">Button</span>
    </button>
  `
})
class TestApp {
    clickCount: number = 0;
    isDisabled: boolean = false;
    rippleDisabled: boolean = false;

    increment() {
        this.clickCount++;
    }
}