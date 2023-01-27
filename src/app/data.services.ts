import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from "./models/articulo.model"
import { Servicio } from "./models/servicio.model"

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}

    cargarArticulos(){
        return this.httpClient.get<Articulo[]>('https://carrito-compras-e8f39-default-rtdb.firebaseio.com/articulos.json');
    } 

    guardarArticulo(articulo: Articulo[]){
        this.httpClient.put('https://carrito-compras-e8f39-default-rtdb.firebaseio.com/articulos.json', articulo)
            .subscribe(
                response => console.log("resultado de guardar personas: " + response),
                error => console.error("error guardar personas: " + error)            
            );
    }

    guardarServicio(servicio: Servicio[]){
        this.httpClient.put('https://carrito-compras-e8f39-default-rtdb.firebaseio.com/servicios.json', servicio)
            .subscribe(
                response => console.log("resultado de guardar personas: " + response),
                error => console.error("error guardar personas: " + error)            
            );
    }

    guardarArticuloCarrito(articulo: Articulo[]){
        this.httpClient.put('https://carrito-compras-e8f39-default-rtdb.firebaseio.com/carrito.json', articulo)
            .subscribe(
                response => console.log("resultado de guardar personas: " + response),
                error => console.error("error guardar personas: " + error)            
            );
    }
    
    eliminarArticulo(indice: number){
        let url: string;
        url = 'https://carrito-compras-e8f39-default-rtdb.firebaseio.com/articulos/' + indice + '.json';
        this.httpClient.delete(url)        
            .subscribe(
                response => console.log("resultado eliminar persona: " + response),
                error => console.log("error en eliminar persona: "+ error)
            ); 
    }

    cargarArticulosCarrito(){
        return this.httpClient.get<Articulo[]>('https://carrito-compras-e8f39-default-rtdb.firebaseio.com/carrito.json');
    } 

    cosultarDetalle(indice: number){
        return this.httpClient.get<Articulo[]>('https://carrito-compras-e8f39-default-rtdb.firebaseio.com/carrito/' + indice + '.json');
    }     

}