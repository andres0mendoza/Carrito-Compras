import { Catalogo } from './catalogo.model';

export class Articulo extends Catalogo {
    
    marca: string = "";
    modelo: string = "";

    constructor(categoria: string, nombre: string, precio: number,
        codigoArticulo: string, descripcion: string, fechaRegitro: Date,
        marca: string, modelo: string){
        
        super(categoria, nombre, precio, codigoArticulo, 
            descripcion, fechaRegitro)
        this.marca = marca;
        this.modelo = modelo;
    }




}