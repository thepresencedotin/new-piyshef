import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCaseStudiesComponent } from './single-case-studies.component';

describe('SingleCaseStudiesComponent', () => {
  let component: SingleCaseStudiesComponent;
  let fixture: ComponentFixture<SingleCaseStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCaseStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
