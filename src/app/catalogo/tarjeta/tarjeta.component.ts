import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { Articulo } from '../../models/articulo.model';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {
  
  @Input() indice: number = 0;
  @Input() categoria: string = "";
  @Input() nombre: string = "";
  @Input() precio: number = 0;
  @Input() codigoArticulo: string = "";
  @Input() descripcion: string = "";
  @Input() fechaRegitro: Date = new Date();
  @Input() marca: string = "";
  @Input() modelo: string = "";

  constructor(private articuloService: ArticuloService ) { }

  ngOnInit(): void {
  }

  eliminarArticulo(){
    this.articuloService.eliminarArticulo(this.indice)
    this.articuloService.modificarArticulos();
  }

  agregarCarrito(){
    let articulo = new Articulo(this.categoria, this.nombre, this.precio,
      this. codigoArticulo, this.descripcion, this.fechaRegitro, this.marca, this.modelo);  
      this.articuloService.agregarArticuloCarrito(articulo)
  }

}
