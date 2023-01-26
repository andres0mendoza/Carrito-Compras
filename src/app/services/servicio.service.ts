import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DataServices } from '../data.services';
import { Servicio } from '../models/servicio.model';

@Injectable()
export class ServicioService{

    servicio: Servicio[]  = [
        //new Articulo("1", 0, "123", "s", "ws", new Date())
    ];

    constructor(private dataServices: DataServices){}

    setServicios(servicio: Servicio[]){
        this.servicio = servicio;
    }

    /*obtenerPersonas() : Observable<Servicio[]>{
        return this.dataServices.cargarServicio();
      }*/ 

    agregarServicio(servicio: Servicio){
        console.log("Entro a agregarServicio")
        this.servicio.push(servicio)
        this.dataServices.guardarServicio(this.servicio);
    }

    eliminarServicio(index: number){
        this.servicio.splice(index, 1);
        this.dataServices.eliminarArticulo(index);
        //se vuelve a guardar el arreglo parar regenerar los indices
        this.modificarServicio();
      }

      modificarServicio(){
        if(this.servicio != null){
          this.dataServices.guardarServicio(this.servicio);
        }
      }

}