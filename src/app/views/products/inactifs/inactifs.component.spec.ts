import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactifsComponent } from './inactifs.component';

describe('InactifsComponent', () => {
  let component: InactifsComponent;
  let fixture: ComponentFixture<InactifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactifsComponent]
    });
    fixture = TestBed.createComponent(InactifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
