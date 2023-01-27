import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../models/articulo.model';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  articulo: Articulo[] = [];

  @Input() indice: number = 0;
  @Input() categoria: string = "";
  @Input() nombre: string = "";
  @Input() precio: number = 0;
  @Input() codigoArticulo: string = "";
  @Input() descripcion: string = "";
  @Input() fechaRegitro: Date = new Date();
  @Input() marca: string = "";
  @Input() modelo: string = "";

  tempo: string = "";

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
