import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaVehiculoComponent } from './busqueda-vehiculo.component';

describe('BusquedaVehiculoComponent', () => {
  let component: BusquedaVehiculoComponent;
  let fixture: ComponentFixture<BusquedaVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
