import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
//import { HttpGenericoService } from './http-generico.service';
import { Observable } from 'rxjs';
import { URLSearchParams } from "@angular/http";
import { Helado } from '../clases/helado';


@Injectable({
  providedIn: 'root'
})
export class VehiculosServiceService {

  constructor(public miHttp: MiHttpService) { }

  public ServiceTraerVehiculos():Observable<any> {
    return this.miHttp.httpGet("traertodosVehiculos", {})
      .pipe(data => { return data; });
  }

  // public ServiceAltaVehiculo(vehiculo) {
  //   return this.miHttp.httpPost("altaVehic",vehiculo)
  //   .then((data)=>{return data})
  //   .catch((data)=>{return data});

  // }

  public ServiceTraerUnVehiculo(vehiculo):Observable<any> {
    return this.miHttp.httpGet("traerunVehiculo/"+vehiculo, {})
      .pipe(data => { return data; });
  }



  

}
