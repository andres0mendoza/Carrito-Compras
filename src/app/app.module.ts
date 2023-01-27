import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './catalogo/articulo/articulo.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloService } from "./services/articulo.service"
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ServicioComponent } from './catalogo/servicio/servicio.component';
import { ServicioService } from './services/servicio.service';
import { PagoComponent } from './pago/pago.component';
import { TarjetaComponent } from './catalogo/tarjeta/tarjeta.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    CatalogoComponent,
    ServicioComponent,
    PagoComponent,
    TarjetaComponent,
    InicioComponent,
    CarritoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [DataServices, ArticuloService, ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
