import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarProductoComponent } from './formulario-editar-producto.component';

describe('FormularioEditarProductoComponent', () => {
  let component: FormularioEditarProductoComponent;
  let fixture: ComponentFixture<FormularioEditarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEditarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
