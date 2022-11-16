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
      url: "assets/instantcrush.mp3",
      description:"Un clásico de la música electrónica.¿Quién no conoce a Daft Punk?"
    },
    {
      id: 2,
      titulo: "Despecha",
      artista: "Rosalia",
      img: "assets/despecha.png",
      estilo:"Pop",
      fecha: "2022",
      album: "Motomami",
      url: "assets/despecha.mp3",
      description:"Lo más nuevo de la cantante que lo está petando todo."
    },
    {
      id: 3,
      titulo: "Un Verano sin ti",
      artista: "Bad Bunny",
      img: "assets/unveranosinti.jpg",
      estilo:"Pop",
      fecha: "2022",
      album: "Un Verano sin ti",
      url: "assets/unveranosinti.mp3",
      description:"El latineo de Bad Bunny por excelencia"
    },
    {
      id: 4,
      titulo: "Hold On",
      artista: "Illenium",
      img: "assets/holdon.jpg",
      estilo:"Electrónica",
      fecha: "2019",
      album: "Ascend",
      url: "assets/holdon.mp3",
      description:"Un estilo de música fresco y que le gustará al mundo, el Future Bass"
    },
    {
      id: 5,
      titulo: "Soldadito Marinero",
      artista: "Fito y Fitipaldis",
      img: "assets/soldaditomarinero.jpg",
      estilo:"Alternativa",
      fecha: "2003",
      album: "Lo Más Lejos",
      url: "assets/soldaditomarinero.mp3",
      description:"Un resumen a la cultura española, simplemente con esta canción."
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
  url: string;
  description: string;

};
