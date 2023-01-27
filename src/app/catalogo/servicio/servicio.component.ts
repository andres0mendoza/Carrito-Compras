import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../../services/servicio.service"
import { Servicio } from "../../models/servicio.model"

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html'
})
export class ServicioComponent implements OnInit {

  categoria: string = "";
  nombre: string = "";
  precio: number = 0;
  codigoArticulo: string = "";
  descripcion: string = "";
  fechaRegitro: Date = new Date();
  unidadMedida: string = "";
  frecuencia: string = ""

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
  }

  onGuardarServicio(){
    let servicio = new Servicio(this.categoria, this.nombre, this.precio,
      this. codigoArticulo, this.descripcion, this.fechaRegitro, this.unidadMedida, this.frecuencia);  
      
      this.servicioService.agregarServicio(servicio)
  }

}
