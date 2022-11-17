import { Component, OnInit } from '@angular/core';
import { CancionesService, Cancion } from '../servicios/canciones.service';
import { ServicioVerDetalleService } from "../servicio-ver-detalle.service";
import { ServicioReproducirCancion } from '../servicios/servicio-reproducir-cancion.service';
import { FiltrosServicioService  } from '../filtros-servicio.service';



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

    console.log(this.canciones);

    

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
    console.log("FILTRO: ")

    this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.titulo == busqueda);

  }

  public getCancionesFiltradasEstilo(estilo: string) {


    switch (estilo) {
      case "Electrónica":
        console.log("Filtro electrónica");
        this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.estilo == estilo);
        break;
      case "Pop":
        console.log("Filtro electrónica");
        this.canciones = this._cancionesService.getCanciones().filter(cancion => cancion.estilo == estilo);
        break;
      case "Alternativa":
        console.log("Filtro electrónica");
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


