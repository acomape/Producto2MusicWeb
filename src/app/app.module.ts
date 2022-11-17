import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './listaCanciones/listaCanciones.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { MaterialModule } from './shared/modules/material/material.module';





//Servicios

import {CancionesService} from './servicios/canciones.service';
import { ServicioReproducirCancion } from './servicios/servicio-reproducir-cancion.service';
import { detalleCancionComponent } from './detalleCancion/detalleCancion.component';
import { APP_ROUTING } from './app.routes';
import { TextFilterComponent } from './filtro-canciones/filtro-canciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    NavbarComponent,
    HomeComponent,
    detalleCancionComponent,
    HeaderComponent,
    ReproductorComponent,
    TextFilterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    APP_ROUTING

  ],
  providers: [
    CancionesService,
    ServicioReproducirCancion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
