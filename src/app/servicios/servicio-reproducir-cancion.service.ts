import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioReproducirCancion {
  @Output() reproducirCancionTrigger: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
