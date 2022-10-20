import { AstMemoryEfficientTransformer } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable()
export class CancionesService {

  private canciones: Cancion[] = [

    {
      id: 1,
      titulo: "Instant Crush",
      artista: "Daft Punk",
      img: "assets/instantcrush.jpg",
      estilo:"Electrónica",
      fecha: "2013",
      album: "R.A.M",
    },
    {
      id: 2,
      titulo: "Despecha",
      artista: "Rosalia",
      img: "assets/despecha.png",
      estilo:"Pop",
      fecha: "2022",
      album: "Motomami",
    },
    {
      id: 3,
      titulo: "Un Verano sin ti",
      artista: "Bad Bunny",
      img: "assets/unveranosinti.jpg",
      estilo:"Pop",
      fecha: "2022",
      album: "Un Verano sin ti",
    },
    {
      id: 4,
      titulo: "Hold On",
      artista: "Illenium",
      img: "assets/holdon.jpg",
      estilo:"Electrónica",
      fecha: "2019",
      album: "Ascend",
    },
    {
      id: 5,
      titulo: "Soldadito Marinero",
      artista: "Fito y Fitipaldis",
      img: "assets/soldaditomarinero.jpg",
      estilo:"Alternativa",
      fecha: "2003",
      album: "Lo Más Lejos",
    },
  ];


  constructor() {
    console.log ("Servicio listo para usar");
  }

  getCanciones(): Cancion[]{
    return this.canciones;
  }

}

export interface Cancion{

  id: number;
  titulo: string;
  artista: string;
  img: string;
  estilo: string;
  fecha: string;
  album: string;

};
