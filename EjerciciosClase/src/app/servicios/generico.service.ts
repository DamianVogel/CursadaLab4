import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { MiHttpService } from './mi-http.service';


import { Observable } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  metodo: string;

  constructor(public miHttp: MiHttpService) {

  }

  /*
  public traerJugadores():Observable<any> {
    return this.miHttp.httpGet("ReportLogEmpleados", {})
      .pipe(data => { return data; });

  }
*/
  
  public traerHelados():Observable<any> {
    return this.miHttp.httpGet("TraerTodosLosHelados", {})
      .pipe(data => { return data; });

  }

  public AltaHelado(helado):Observable<any> {
    return this.miHttp.httpPost("altaHelado",helado)
        .pipe(data =>{ return data;}); 

  }




}
