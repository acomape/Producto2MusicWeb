import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CancionesService } from '../servicios/canciones.service';
import { FiltroCancionesPipe } from '../pipe/filtro.pipe';
import { CancionComponent} from '../listaCanciones/listaCanciones.component';

@Component({
  selector: 'app-text-filter',
  templateUrl: './filtro-canciones.component.html',
  styleUrls: ['./filtro-canciones.component.css']
})
export class TextFilterComponent implements OnInit {

  constructor( public cancionesService:CancionesService) { }

  ngOnInit(): void {
  }

  filtroTexto() {
    console.log("click en texto");
  }

  filtroEstilos(){
    console.log("click en estilos");
  }

}
