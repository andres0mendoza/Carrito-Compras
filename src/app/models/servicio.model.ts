import { Catalogo } from './catalogo.model';

export class Servicio extends Catalogo {
    
    unidadMedida: string = "";
    frecuencia: string = "";

    constructor(categoria: string, nombre: string, precio: number,
        codigoArticulo: string, descripcion: string, fechaRegitro: Date,
        unidadMedida: string, frecuencia: string){
        
        super(categoria, nombre, precio, codigoArticulo, 
            descripcion, fechaRegitro)
        this.unidadMedida = unidadMedida;
        this.frecuencia = frecuencia;
    }
}