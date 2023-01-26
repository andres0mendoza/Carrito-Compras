import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {
  
  @Input() indice: number = 1;
  @Input() nombre: string = "";
  @Input() descripcion: string = "";

  constructor(private articuloService: ArticuloService ) { }

  ngOnInit(): void {
  }

  eliminarArticulo(){
    this.articuloService.eliminarArticulo(this.indice)
    this.articuloService.modificarArticulos();
  }

}
