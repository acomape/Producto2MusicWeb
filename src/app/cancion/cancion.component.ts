import { Component, OnInit } from '@angular/core';
import {CancionesService, Cancion} from '../servicios/canciones.service';
import {ServicioVerDetalleService} from "../servicio-ver-detalle.service";

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  canciones:Cancion[] = [];
  cancion: Cancion | undefined;



  constructor( private _cancionesService:CancionesService,
    private servicioDetalle: ServicioVerDetalleService ) { }

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

  playSong(mp3:string){


  }

}
