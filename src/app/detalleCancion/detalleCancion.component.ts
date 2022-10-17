import {Component} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

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

    ) {


      this.activatedRoute.params.subscribe ( params => {
        this.canciones = this._cancionesService.getCanciones ();
        console.log(this.canciones);



      });

    }

    ngOnInit() {
      const routeParams = this.activatedRoute.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('id'));
      this.canciones = this._cancionesService.getCanciones();

      console.log ("hellllo");

      this.cancion = this.canciones.find(cancion => cancion.id === productIdFromRoute);
    }

    goHome(): void {
      this.router.navigate(['/home'])
    }


  }

