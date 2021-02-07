import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCaseStudiesComponent } from './all-case-studies.component';

describe('AllCaseStudiesComponent', () => {
  let component: AllCaseStudiesComponent;
  let fixture: ComponentFixture<AllCaseStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCaseStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
