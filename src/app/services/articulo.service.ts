import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DataServices } from '../data.services';
import { Articulo } from '../models/articulo.model';

@Injectable()
export class ArticuloService{

  articulos: Articulo[]  = [];
  articulosCarrito: Articulo[]  = [];

  constructor(private dataServices: DataServices){}

  setArticulos(articulo: Articulo[]){
      this.articulos = articulo;
  }

  obtenerArticulos() : Observable<Articulo[]>{
      return this.dataServices.cargarArticulos();
    } 

  agregarArticulo(articulo: Articulo){
      this.articulos.push(articulo)
      this.dataServices.guardarArticulo(this.articulos);
  }

  eliminarArticulo(index: number){
      this.articulos.splice(index, 1);
      this.dataServices.eliminarArticulo(index);
    }

  modificarArticulos(){
    if(this.articulos != null){
      this.dataServices.guardarArticulo(this.articulos);
    }
  }

  agregarArticuloCarrito(articulo: Articulo){
    this.articulosCarrito.push(articulo)
    this.dataServices.guardarArticuloCarrito(this.articulosCarrito);
  }

  permitirAccesos(){
    let respuesta: boolean = false
    this.dataServices.cosultarDetalle(0).subscribe(
      (data) => {
        respuesta = data != null ? true : false;
      }
    );
    return respuesta;
  }

}