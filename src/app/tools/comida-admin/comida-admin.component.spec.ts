import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaAdminComponent } from './comida-admin.component';

describe('ComidaAdminComponent', () => {
  let component: ComidaAdminComponent;
  let fixture: ComponentFixture<ComidaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
