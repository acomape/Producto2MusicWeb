import { TestBed } from '@angular/core/testing';

import { FiltrosServicioService } from './filtros-servicio.service';

describe('FiltrosServicioService', () => {
  let service: FiltrosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltrosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
