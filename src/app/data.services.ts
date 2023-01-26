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
        //const token = this.loginservice.getIdToken();
        this.httpClient.put('https://carrito-compras-e8f39-default-rtdb.firebaseio.com/servicios.json', servicio)
            .subscribe(
                response => console.log("resultado de guardar personas: " + response),
                error => console.error("error guardar personas: " + error)            
            );
    }
    
    /*actualizarArticulo(index: number, persona: Persona){
        const token = this.loginservice.getIdToken();
        let url: string;
        url = 'https://listado-personas-a88ce-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+token;
        this.httpClient.put(url, persona)
            .subscribe(
                response => console.log("resultado modificar persona: " + response),
                error => console.log("error en modificar persona: "+ error)
            );      
    }
*/
    eliminarArticulo(index: number){
        //const token = this.loginservice.getIdToken();
        let url: string;
        url = 'https://carrito-compras-e8f39-default-rtdb.firebaseio.com/articulos/' + index + '.json';
        this.httpClient.delete(url)        
            .subscribe(
                response => console.log("resultado eliminar persona: " + response),
                error => console.log("error en eliminar persona: "+ error)
            ); 
    }
}