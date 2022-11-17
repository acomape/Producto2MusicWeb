import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CancionesService } from '../servicios/canciones.service';
import { FiltroCancionesPipe } from '../pipe/filtro.pipe';
import { CancionComponent} from '../listaCanciones/listaCanciones.component';
import { FiltrosServicioService  } from  '../filtros-servicio.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-text-filter',
  templateUrl: './filtro-canciones.component.html',
  styleUrls: ['./filtro-canciones.component.css']
})
export class TextFilterComponent implements OnInit {

  resultadoBusqueda:any;
  resultadoFiltro:any;

  constructor( private filtrosServicio: FiltrosServicioService) { }


  textFilter = new FormGroup({
    texto: new FormControl(''),
  });

  styleFilter = new FormGroup({
    estilo: new FormControl(''),
  });

 


  ngOnInit(): void {
  }

  filtroTexto() {
    this.resultadoBusqueda = this.textFilter.value;
    this.filtrosServicio.disparadorFiltroTexto.emit(this.resultadoBusqueda.texto);
  }

  filtroEstilos(){

    this.resultadoFiltro = this.styleFilter.value;
    this.filtrosServicio.disparadorFiltroEstilo.emit(this.resultadoFiltro.estilo);
  }

}
