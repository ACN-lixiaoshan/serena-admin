import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingItemComponent } from './parking-item.component';

describe('ParkingItemComponent', () => {
  let component: ParkingItemComponent;
  let fixture: ComponentFixture<ParkingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
