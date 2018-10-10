import { TestBed } from '@angular/core/testing';

import { VehiculosServiceService } from './vehiculos-service.service';

describe('VehiculosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiculosServiceService = TestBed.get(VehiculosServiceService);
    expect(service).toBeTruthy();
  });
});
