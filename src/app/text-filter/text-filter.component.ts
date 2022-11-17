import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CancionesService } from '../servicios/canciones.service';
import { FiltroCancionesPipe } from '../pipe/filtro.pipe';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.css']
})
export class TextFilterComponent implements OnInit {

  constructor( public cancionesService:CancionesService) { }

  ngOnInit(): void {
  }

}
