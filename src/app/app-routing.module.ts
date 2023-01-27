import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './catalogo/articulo/articulo.component';
import { ServicioComponent } from './catalogo/servicio/servicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PermisoGuard } from './permiso.guard';
import { PagoComponent } from './pago/pago.component';

const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'articulo', component: ArticuloComponent},
  { path:'servicio', component: ServicioComponent},
  { path:'catalogo', component: CatalogoComponent},
  { path:'carrito', component: CarritoComponent},
  { path:'detalle', component: DetalleComponent, canActivate: [PermisoGuard]},
  { path:'pago', component: PagoComponent, canActivate: [PermisoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
