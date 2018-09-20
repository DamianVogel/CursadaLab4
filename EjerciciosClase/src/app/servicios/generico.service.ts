import { Injectable } from '@angular/core';
import {Http ,Response} from '@angular/http';
import { MiHttpService } from './mi-http.service'; 

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  api="http://localhost:8080/jugadoresarchivo/apirestjugadores/";
  peticion:any;

  constructor( public miHttp: MiHttpService ) {
    
  }

  public  traerJugadores(ruta) 
  {
    return this.miHttp.httpGetPromise(this.api,ruta)
    //.toPromise()
    .then( data => {
      console.log("Archivo jugadores");
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
 





 
}
}
