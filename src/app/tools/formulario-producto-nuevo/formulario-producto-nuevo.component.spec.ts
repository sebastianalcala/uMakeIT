import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProductoNuevoComponent } from './formulario-producto-nuevo.component';

describe('FormularioProductoNuevoComponent', () => {
  let component: FormularioProductoNuevoComponent;
  let fixture: ComponentFixture<FormularioProductoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProductoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProductoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
