import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DataServices } from '../data.services';
import { Servicio } from '../models/servicio.model';

@Injectable()
export class ServicioService{

    servicio: Servicio[]  = [];

    constructor(private dataServices: DataServices){}

    setServicios(servicio: Servicio[]){
        this.servicio = servicio;
    }

    agregarServicio(servicio: Servicio){
        console.log("Entro a agregarServicio")
        this.servicio.push(servicio)
        this.dataServices.guardarServicio(this.servicio);
    }

    eliminarServicio(index: number){
        this.servicio.splice(index, 1);
        this.dataServices.eliminarArticulo(index);
        this.modificarServicio();
      }

      modificarServicio(){
        if(this.servicio != null){
          this.dataServices.guardarServicio(this.servicio);
        }
      }

}