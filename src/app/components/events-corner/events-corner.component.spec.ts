import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCornerComponent } from './events-corner.component';

describe('EventsCornerComponent', () => {
  let component: EventsCornerComponent;
  let fixture: ComponentFixture<EventsCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
