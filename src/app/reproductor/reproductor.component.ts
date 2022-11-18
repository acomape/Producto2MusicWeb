import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { Cancion } from '../servicios/canciones.service';
import { ServicioReproducirCancion } from '../servicios/servicio-reproducir-cancion.service';
import { PlaySongComponent } from "../play-song/play-song.component";

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  [x: string]: any;
  canciones:Cancion[] = [];
  @Input() cancion: Cancion | undefined;
  valuePlayedTime!:string;

  @ViewChild(PlaySongComponent, { static: false })
  playsong!: PlaySongComponent;

  audio!: HTMLAudioElement;
  interval!: NodeJS.Timer;



  constructor(private reproducirCancion: ServicioReproducirCancion) {
    this.toHumanTime(0);
  }

  @Input() music:any;
  player = new Audio;

  ngOnInit(): void {

    this.valuePlayedTime = '00:00';
    this.reproducirCancion.reproducirCancionTrigger.subscribe(data => {
      console.log("Recibiendo dat...a", data);
      this.cancion = data;
      this.player.pause();
      if (this.cancion) {
        if (this.audio != undefined){
          this.stopSong();
          this.audio.src = this.cancion!.url;
        } else{
          this.audio = new Audio();
          this.audio.src = this.cancion!.url;
        }
      }


  })
  }

  playSong() {
    this.player.src = this.cancion?.url as string;
    if(this.audio){
      this.audio.play();
      this.interval = setInterval(function () {
        //do nothing. this just keeps the bar refreshing
      }, 1000);
    }
    console.log("PLAY");
  }

  pauseSong() {
    if(this.audio){
      clearInterval(this.interval);
      this.audio.pause();
    }
    console.log("PAUSE");
  }

  stopSong() {
    this.player.load();
    clearInterval(this.interval);
    this.audio.src = this.cancion!.url;
  }

  prevSong() {
    console.log("PREV");
  }
  nextSong() {
    console.log("NEXT");
  }

  toHumanTime(length: number) {
    var minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_int < 10 ? seconds_str.substr(0, 1) : seconds_str.substr(0, 2),
    time = (minutes < 10 ? "0" + minutes : minutes) + ':' + (seconds_int < 10 ? "0" + seconds : seconds);
    return time;
  }

  refreshTimePlayed(event: any){
    this.valuePlayedTime = this.toHumanTime(event);
    this.audio.currentTime = this.toSeconds(this.valuePlayedTime);
  }

  toPercent(time: string) {
    let duration = this.audio.duration;
    let minToSec = time.split(':');
    let minutos = Math.floor(parseInt(minToSec[0]) * 60);
    if(minToSec[1][0] === "0"){
      minToSec[1] = minToSec[1][1]
    }
    let segundos = Math.floor(parseInt(minToSec[1]));
    return Math.floor(minutos + segundos) * 100 / duration;
}

toSeconds(time: string){
  let duration = this.audio.duration;
  let minToSec = time.split(':');
  let minutos = Math.floor(parseInt(minToSec[0]) * 60);
  if(minToSec[1][0] === "0"){
    minToSec[1] = minToSec[1][1]
  }
  let segundos = Math.floor(parseInt(minToSec[1]));
  return minutos + segundos;
}

changeCurrentTime(){
  this.audio.currentTime = this.toSeconds(this.valuePlayedTime);
  this.toHumanTime(this.audio.currentTime);
}

}
