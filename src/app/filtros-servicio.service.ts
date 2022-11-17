import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrosServicioService {
  @Output() disparadorFiltroTexto: EventEmitter<any> = new EventEmitter();
  @Output() disparadorFiltroEstilo: EventEmitter<any> = new EventEmitter();
  

  constructor() { }
}
