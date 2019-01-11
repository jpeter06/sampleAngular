import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimetableComponent } from './primetable.component';

describe('PrimetableComponent', () => {
  let component: PrimetableComponent;
  let fixture: ComponentFixture<PrimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
