import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDetalladaComponent } from './factura-detallada.component';

describe('FacturaDetalladaComponent', () => {
  let component: FacturaDetalladaComponent;
  let fixture: ComponentFixture<FacturaDetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
