import { Injectable } from "@angular/core";

@Injectable()
export class CancionesService {


}

export interface ReproductorService{

  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number;
  currentTime: number;
  canPlay: boolean;


  };
