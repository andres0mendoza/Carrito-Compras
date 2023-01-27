import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo.model';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.obtenerArticulos()
    .subscribe(
      (articulos: Articulo[]=[]) => { this.articulos = articulos; }
    );    
  }
}
