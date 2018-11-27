import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaCarritoComponent } from './comida-carrito.component';

describe('ComidaCarritoComponent', () => {
  let component: ComidaCarritoComponent;
  let fixture: ComponentFixture<ComidaCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
