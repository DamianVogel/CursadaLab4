import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraMascotaComponent } from './muestra-mascota.component';

describe('MuestraMascotaComponent', () => {
  let component: MuestraMascotaComponent;
  let fixture: ComponentFixture<MuestraMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
