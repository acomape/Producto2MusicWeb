import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { detalleCancionComponent } from './detalleCancion/detalleCancion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detalles/:id', component: detalleCancionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



