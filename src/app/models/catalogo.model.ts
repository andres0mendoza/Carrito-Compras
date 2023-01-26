export class Catalogo {
    categoria : string;
    nombre: string;
    precio: number;
    codigoArticulo: string;    
    descripcion: string;
    fechaRegitro: Date;

    constructor( categoria: string, nombre: string, precio: number,
        codigoArticulo: string, descripcion: string, fechaRegitro: Date
         
         ){
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.codigoArticulo = codigoArticulo        
        this.descripcion = descripcion
        this.fechaRegitro = fechaRegitro;
    }
}