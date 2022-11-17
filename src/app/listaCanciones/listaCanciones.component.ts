import { Component, OnInit } from '@angular/core';
import {CancionesService, Cancion} from '../servicios/canciones.service';
import {ServicioVerDetalleService} from "../servicio-ver-detalle.service";
import { ServicioReproducirCancion } from '../servicios/servicio-reproducir-cancion.service';

@Component({
  selector: 'app-listaCanciones',
  templateUrl: './listaCanciones.component.html',
  styleUrls: ['./listaCanciones.component.css']
})
export class CancionComponent implements OnInit {

  canciones:Cancion[] = [];
  cancion: Cancion | undefined;
  constructor( private _cancionesService:CancionesService,
    private servicioDetalle: ServicioVerDetalleService,
    private servicioReproducirCancion: ServicioReproducirCancion ) { }

  ngOnInit() {

    this.canciones = this._cancionesService.getCanciones();

    console.log (this.canciones);


  }

  verDetalle(id:number){
    this.cancion = this.canciones.find(cancion => cancion.id === id);
    let id_cancion = this.cancion?.id;
    console.log("TEST" +  id_cancion);

    this.servicioDetalle.disparadorDetalle.emit(this.cancion);
  }

  reproducirCancion(id:number){
    this.cancion = this.canciones.find(cancion => cancion.id === id);
    this.servicioReproducirCancion.reproducirCancionTrigger.emit(this.cancion);
  }

}
