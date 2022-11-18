import { identifierName } from '@angular/compiler';
import {Component} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioVerDetalleService } from '../servicio-ver-detalle.service';

import { Cancion, CancionesService } from '../servicios/canciones.service';

@Component ({
  selector: 'app-detalleCancion',
  templateUrl: './detalleCancion.component.html'
})

export class detalleCancionComponent {

  canciones:Cancion[] = [];
  cancion: Cancion | undefined;


  constructor(  private activatedRoute: ActivatedRoute,
                private _cancionesService: CancionesService,
                private router: Router,
                private servicioDetalle: ServicioVerDetalleService


    ) {

    }

    ngOnInit() {
    
      this.servicioDetalle.disparadorDetalle.subscribe(data => {
        this.cancion = data;
      })

    }


  }

