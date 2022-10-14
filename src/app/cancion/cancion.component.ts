import { Component, OnInit } from '@angular/core';
import {CancionesService, Cancion} from '../servicios/canciones.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  canciones:Cancion[] = [];

  constructor( private _cancionesService:CancionesService ) { }

  ngOnInit() {

    this.canciones = this._cancionesService.getCanciones();

    console.log (this.canciones);


  }

}
