import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MascotasService } from '../../servicios/mascotas.service';
import { Mascota } from '../../clases/mascota';
@Component({
  selector: 'app-busqueda-mascota',
  templateUrl: './busqueda-mascota.component.html',
  styleUrls: ['./busqueda-mascota.component.css']
})
export class BusquedaMascotaComponent implements OnInit {

  muestra: boolean=true;

  @Output() lanzador = new EventEmitter();
  
  mascota:Mascota;
  
 id:number;

  respuesta:any;
  constructor(private _servicio:MascotasService) { }


  BuscarMascota(){
    this._servicio.ServiceTraerMascota(this.id)
    .subscribe((data)=>{

      let rtaJson=JSON.parse(data._body);

        //this.muestra=true;
        console.log(rtaJson);
        //this.lanzador.emit(rtaJson);
     
       // console.log(rtaJson);
        //this.respuesta=rtaJson;
        //this.muestra=true;
        this.lanzador.emit(rtaJson);
      })
    }





  ngOnInit() {
  }

}
