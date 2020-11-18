import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StepsApiService} from './services/steps-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { StepsServiceStub } from './services/steps.service.mock';
import { By } from '@angular/platform-browser';
import { throwError } from 'rxjs';


describe('AppComponent', () => {
  
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule], 
      declarations: [ AppComponent ],
      providers: [ { HttpClientModule,HttpClientTestingModule, provide: StepsApiService, useValue: StepsServiceStub } ],
   }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'capitalone'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('capitalone');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('capitalone app is running!');
  // });

  // it('should have "steps" populated ', () => {
  //   expect(component.steps.length).toBeGreaterThan(0);
  // });

  // it('should call getStepsDetails() of StepService on component Init', () => {
  //   spyOn(component.stepsApi, 'getStepsDetails').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.stepsApi.getStepsDetails).toHaveBeenCalled();
  // });

});
