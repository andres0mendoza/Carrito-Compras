import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../models/articulo.model';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  articulo: Articulo[] = [];

  constructor(private dataServices: DataServices) { }

  ngOnInit(): void {
    this.dataServices.cosultarDetalle(0)
    .subscribe(
      (articulo: Articulo[]=[]) => { 
        this.articulo = articulo; 
      }
    );
  }

}
