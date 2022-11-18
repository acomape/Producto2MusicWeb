import { Component, OnInit } from '@angular/core';
import { CancionesService, Cancion } from '../servicios/canciones.service';
import { ServicioVerDetalleService } from "../servicio-ver-detalle.service";
import { ServicioReproducirCancion } from '../servicios/servicio-reproducir-cancion.service';
import { FiltrosServicioService } from '../filtros-servicio.service';



@Component({
  selector: 'app-listaCanciones',
  templateUrl: './listaCanciones.component.html',
  styleUrls: ['./listaCanciones.component.css']
})
export class CancionComponent implements OnInit {

  canciones: Cancion[] = [];
  cancion: Cancion | undefined;
  constructor(private _cancionesService: CancionesService,
    private filtrosServicio: FiltrosServicioService,
    private servicioDetalle: ServicioVerDetalleService,
    private servicioReproducirCancion: ServicioReproducirCancion) { }

  ngOnInit() {

    this.canciones = this._cancionesService.getCanciones();

    this.filtrosServicio.disparadorFiltroArtista.subscribe(data => {
      this.getCancionesFiltradasArtista(data);
      console.log(data)
    })

    this.filtrosServicio.disparadorFiltroTexto.subscribe(data => {
      this.getCancionesFiltradasTexto(data);
      console.log(data)
    })

    this.filtrosServicio.disparadorFiltroEstilo.subscribe(data => {
      console.log(data)
      this.getCancionesFiltradasEstilo(data);
    })


  }

  public getCancionesFiltradasTexto(busqueda: string) {
    if (busqueda == "") {
      this.canciones = this._cancionesService.getCanciones();
    } else {
      this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.titulo.toLowerCase()  == busqueda.toLowerCase() );
    }
  }

  public getCancionesFiltradasArtista(busqueda: string) {
    if (busqueda == "") {
      this.canciones = this._cancionesService.getCanciones();
    } else {
      this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.artista.toLowerCase() == busqueda.toLowerCase());
    }
  }

  public getCancionesFiltradasEstilo(estilo: string) {

    switch (estilo) {
      case "Electrónica":
        this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.estilo == estilo);
        break;
      case "Pop":
        this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.estilo == estilo);
        break;
      case "Alternativa":
        this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.estilo == estilo);
        break;
      case "Todas":
        this.canciones = this._cancionesService.getCanciones();
        break;
      default:
        this.canciones = [];
        break;
    }
  }


  verDetalle(id: number) {
    this.cancion = this.canciones.find(cancion => cancion.id === id);
    let id_cancion = this.cancion?.id;
    console.log("TEST" + id_cancion);

    this.servicioDetalle.disparadorDetalle.emit(this.cancion);
  }

  reproducirCancion(id: number) {
    this.cancion = this.canciones.find(cancion => cancion.id === id);
    this.servicioReproducirCancion.reproducirCancionTrigger.emit(this.cancion);
  }

}


