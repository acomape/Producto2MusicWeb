import { Pipe, PipeTransform } from "@angular/core";
import { Cancion } from '../servicios/canciones.service';

@Pipe ({
  name: 'filtroCanciones'
})

export class FiltroCancionesPipe implements PipeTransform {

  transform (value: any, campo:string, args: string): any {
    if(!value)return null;
    if(!args)return value;

    return value



  }
}
