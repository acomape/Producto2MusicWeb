import { Component, OnInit } from '@angular/core';
import { Cancion } from '../servicios/canciones.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
[x: string]: any;
canciones:Cancion[] = [];
  cancion: Cancion | undefined;
  
  

  constructor() { }
  

  ngOnInit(): void {
  }
  
  

}
