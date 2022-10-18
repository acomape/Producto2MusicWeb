import { TestBed } from '@angular/core/testing';

import { ServicioVerDetalleService } from './servicio-ver-detalle.service';

describe('ServicioVerDetalleService', () => {
  let service: ServicioVerDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVerDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
