import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioVerDetalleService {
  @Output() disparadorDetalle: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
