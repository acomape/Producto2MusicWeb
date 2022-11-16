import { Component,Input, OnInit } from '@angular/core';
import { Cancion } from '../servicios/canciones.service';
import { ServicioReproducirCancion } from '../servicios/servicio-reproducir-cancion.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  [x: string]: any;
  canciones:Cancion[] = [];
  cancion: Cancion | undefined;



  constructor(private reproducirCancion: ServicioReproducirCancion) { }

  @Input() music:any;
  player = new Audio;

  ngOnInit(): void {

    this.reproducirCancion.reproducirCancionTrigger.subscribe(data => {
      console.log("Recibiendo dat...a", data);
      this.cancion = data;
      this.player.pause()


  })

  }

  playSong() {
    this.player.src = this.cancion?.url as string;
    this.player.play();
    console.log("PLAY");
  }

  pauseSong() {
    this.player.pause()
    console.log("PAUSE");
  }

  stopSong() {
    this.player.load()
  }

  prevSong() {
    console.log("PREV");
  }
  nextSong() {
    console.log("NEXT");
  }




}
