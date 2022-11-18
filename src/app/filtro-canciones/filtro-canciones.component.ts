import { Component, OnInit } from '@angular/core';
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
  resultadoArtista:any;

  constructor( private filtrosServicio: FiltrosServicioService) { }


  textFilter = new FormGroup({
    texto: new FormControl(''),
  });

  artistFilter = new FormGroup({
    artista: new FormControl(''),
  })

  styleFilter = new FormGroup({
    estilo: new FormControl(''),
  });



 


  ngOnInit(): void {
  }

  filtroArtista() {
    this.resultadoArtista = this.artistFilter.value;
    this.filtrosServicio.disparadorFiltroArtista.emit(this.resultadoArtista.artista);
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
