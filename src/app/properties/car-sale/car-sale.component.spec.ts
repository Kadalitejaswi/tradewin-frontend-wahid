import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSaleComponent } from './car-sale.component';

describe('CarSaleComponent', () => {
  let component: CarSaleComponent;
  let fixture: ComponentFixture<CarSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
