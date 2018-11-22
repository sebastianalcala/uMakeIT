import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalbtnComponent } from './paypalbtn.component';

describe('PaypalbtnComponent', () => {
  let component: PaypalbtnComponent;
  let fixture: ComponentFixture<PaypalbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
