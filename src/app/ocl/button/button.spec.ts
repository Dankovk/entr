import {async, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {OclButtonModule} from "./index";

describe('Ocl button', () => {
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [OclButtonModule],
            declarations: [TestApp],
        });
        
        TestBed.compileComponents();
    }));
    
    it('renders', () => {
        let fixture = TestBed.createComponent(TestApp);
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));
        expect(buttonDebugElement.nativeElement !== 'undefined');
    });
    
    it('disables', () => {
        let fixture = TestBed.createComponent(TestApp);
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));
        fixture.nativeElement.querySelector('#disable').click();
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.disabled === true);
    });
    
    it('enables', () => {
        let fixture = TestBed.createComponent(TestApp);
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));
        buttonDebugElement.nativeElement.disabled = true;
        fixture.nativeElement.querySelector('#enable').click();
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.disabled === false);
    });
    
    it('showsSpinner', () => {
        let fixture = TestBed.createComponent(TestApp);
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));
        fixture.nativeElement.querySelector('#loading').click();
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.classList.contains('ocl-button--loading') === true);
    });
    
    it('hidesSpinner', () => {
        let fixture = TestBed.createComponent(TestApp);
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));
        buttonDebugElement.nativeElement.classList.add('ocl-button--loading');
        fixture.nativeElement.querySelector('#not-loading').click();
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.classList.contains('ocl-button--loading') === false);
    });
    
});


@Component({
    selector: 'test-app',
    template: `
    <button ocl-button #button>
        <span class="ocl-button__label">Button</span>
    </button>
    <div id="disable" (click)="button.disable()"></div>
    <div id="loading" (click)="button.showSpinner()"></div>
    <div id="not-loading" (click)="button.hideSpinner()"></div>
    <div id="enable" (click)="button.enable()"></div>
  `
})
class TestApp {
}