import { Injectable } from '@angular/core';

import {Http ,Response, Headers} from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';


@Injectable()

export class MiHttpService {

  //api="https://restcountries.eu/rest/v2/";
    api="http://localhost/Programacion-3-2017/TP_ESTACIONAMIENTO_DV/"
  

  constructor(public http:Http) { }
  
  token = localStorage.getItem('token');

  httpOptions = {
            headers: new Headers({ 'Content-Type': 'application/json',
                                   'token': 'token'
                                 
            })
  };



  public httpGet(metodo:string, objeto:any):Observable<any>{
    console.log(this.httpOptions);


    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));
    
  }

 
  public httpPost(metodo:string, objeto:any)
  {
    
    //var array = new Array(objeto,this.token);

    //console.log(array);

    return this.http.post(this.api + metodo, objeto
                          
                          //,this.httpOptions  
                        )
    .pipe(catchError(this.handleError));
  }

  
  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }

 /* 
  //Con header
  public httpPost(metodo:string, objeto:any)
  {
    return this.http.post(
                          this.api + metodo,objeto,{
                            headers : new Headers({
                              'Content-Type' : 'application/json'
                              }
                            )
    })
    .pipe(catchError(this.handleError));
  }
*/

/*
  // Codigo de Mati
  public httpPostO(url: string, objeto): Observable<Response> {
    return this.http.post(this.api + url, objeto)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
*/



 




}
