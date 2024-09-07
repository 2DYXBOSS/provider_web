import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailmarketCoordComponent } from './order-detailmarket-coord.component';

describe('OrderDetailmarketCoordComponent', () => {
  let component: OrderDetailmarketCoordComponent;
  let fixture: ComponentFixture<OrderDetailmarketCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailmarketCoordComponent]
    });
    fixture = TestBed.createComponent(OrderDetailmarketCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
