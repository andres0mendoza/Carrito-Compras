import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from "../../models/articulo.model"
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html'
})
export class ArticuloComponent implements OnInit{

  categoria: string = "";
  nombre: string = "";
  precio: number = 0;
  codigoArticulo: string = "";
  descripcion: string = "";
  fechaRegitro: Date = new Date();
  marca: string = "";
  modelo: string = ""

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
  }

  onGuardarArticulo(){
    let articulo = new Articulo(this.categoria, this.nombre, this.precio,
      this. codigoArticulo, this.descripcion, this.fechaRegitro, this.marca, this.modelo);  
      this.articuloService.agregarArticulo(articulo)

  /*  if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, persona1)
    }else{
      this.personasService.agregarPersona(persona1);
    }*/
    //this.router.navigate(['personas'])
  }
}
