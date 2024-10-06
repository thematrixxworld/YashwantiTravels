import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailsDialogComponent } from './trip-details-dialog.component';

describe('TripDetailsDialogComponent', () => {
  let component: TripDetailsDialogComponent;
  let fixture: ComponentFixture<TripDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(TripDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
