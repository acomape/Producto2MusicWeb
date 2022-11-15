import { Component, Input, OnInit } from '@angular/core';
import { Cancion, CancionesService } from '../servicios/canciones.service';
import { ServicioVerDetalleService } from '../servicio-ver-detalle.service';
import { ReproductorService } from '../servicios/reproductor.service';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  [x: string]: any;
  @Input() cancion: Cancion | null = null;



  // Song titles
  songs = ['instantcrush', 'despecha', 'unveranosinti', 'holdon', 'soldaditomarinero'];

  // Keep track of song
  cancionIndex = 2;


  audio!: HTMLAudioElement;
  stop = true;
  interval!: any;




  constructor(
      private servicioDetalle: ServicioVerDetalleService,
      private _cancionesService:CancionesService,

  ) { }





  ngOnInit(): void {
    // this.canciones = this._cancionesService.getCanciones();


  }

  ngOnChanges() {
    if (this.cancion) {
      console.log("ngOnChanges this.cancion", this.cancion)
      if (this.audio != undefined){
        this.onStop();
        this.audio.src = this.cancion!.mp3;
      } else{
        this.audio = new Audio();
        this.audio.src = this.cancion!.mp3;
        console.log("this.cancion!.mp3", this.cancion!.mp3)
      }
    }
  }



  onPlay(): void {
    console.log(this.audio, "this.audio")
    this.audio.play();
    this.interval = setInterval(function () {
      //do nothing. this just keeps the bar refreshing
    }, 1000);
    this.stop = false;
  }


  onPause() {
    clearInterval(this.interval);
    this.audio.pause();
    this.stop = true;
  }

  onStop() {
    if (this.cancion) {
      clearInterval(this.interval);
      this.audio.src = this.cancion!.mp3;
      this.stop = true;
    }
  }


  playSong() {
    this.playSong();
    console.log("PLAY");
  }

  pauseSong() {
    console.log("PAUSE");
  }

  stopSong() {
    console.log("STOP");
  }

  prevSong() {
    console.log("PREV");
  }
  nextSong() {
    console.log("NEXT");
  }




}
