import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

//Servicios

import {CancionesService} from './servicios/canciones.service';

@NgModule({
  declarations: [
    AppComponent, CancionComponent, NavbarComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
