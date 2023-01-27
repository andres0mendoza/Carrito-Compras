import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.services';
import { Articulo } from '../models/articulo.model';
import { Servicio } from '../models/servicio.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html'
})
export class CarritoComponent implements OnInit {

  articulos: Articulo[] = [];
  servicios: Servicio[] = [];

  constructor(private dataServices: DataServices) { }

  ngOnInit(): void {
    this.dataServices.cargarArticulosCarrito()
    .subscribe(
      (articulos: Articulo[]=[]) => { this.articulos = articulos;}
    );
  }

  verDetalles(indice: number){
    this.dataServices.cosultarDetalle(indice)
      .subscribe(
        (articulos: Articulo[]=[]) => { this.articulos = articulos;}
      );
  }

}
