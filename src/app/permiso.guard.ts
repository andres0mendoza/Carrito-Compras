import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServices } from './data.services';
import { HttpClient } from '@angular/common/http';
import { ArticuloService } from './services/articulo.service';

@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {

  constructor(private articuloService: ArticuloService) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.carritoTieneArticulo()){    
      return true;
    }else{
      return false;
    }
    
  }

/*  carritoTieneArticulo() : boolean {
    let respuesta: boolean = false
    this.dataServices.cosultarDetalle(0).subscribe(
      (data) => {
        respuesta = data != null ? true : false;
      }
    )
    return respuesta;
  } */

  carritoTieneArticulo() : boolean {
    return this.articuloService.permitirAccesos()
  } 


}
