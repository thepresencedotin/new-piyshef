import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJournalComponent } from './all-journal.component';

describe('AllJournalComponent', () => {
  let component: AllJournalComponent;
  let fixture: ComponentFixture<AllJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
