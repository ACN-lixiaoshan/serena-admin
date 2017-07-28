import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingEditComponent } from './parking-edit.component';

describe('ParkingEditComponent', () => {
  let component: ParkingEditComponent;
  let fixture: ComponentFixture<ParkingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
