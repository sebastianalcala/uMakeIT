import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoExtraComponent } from './nuevo-extra.component';

describe('NuevoExtraComponent', () => {
  let component: NuevoExtraComponent;
  let fixture: ComponentFixture<NuevoExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
