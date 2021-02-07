import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJournalComponent } from './single-journal.component';

describe('SingleJournalComponent', () => {
  let component: SingleJournalComponent;
  let fixture: ComponentFixture<SingleJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
