import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
//import { HttpGenericoService } from './http-generico.service';
import { Observable } from 'rxjs';
import { URLSearchParams } from "@angular/http";
//import { Helado } from '../clases/helado';



@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(public miHttp: MiHttpService) { }

  public ServiceTraerMascotas():Observable<any> {
    return this.miHttp.httpGet("TraerTodasLasMascotas", {})
      .pipe(data => { return data; });
  }

  public ServiceBajaMascota(id):Observable<any> {
    return this.miHttp.httpPost("BajaMascota",id).pipe(data => { return data; });
    // .then((data)=>{return data})
    // .catch((data)=>{return data});

  }

  public ServiceTraerMascota(mascota):Observable<any> {
    return this.miHttp.httpGet("traerunamascota/"+mascota, {})
      .pipe(data => { return data; });
  }

  public ServiceAltaMascota(mascota):Observable<any> {
    return this.miHttp.httpPost("altaMascota",mascota)
        .pipe(data =>{ return data;}); 

  }



}


