//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehiculosServiceService } from '../../servicios/vehiculos-service.service';
import { Vehiculo } from '../../clases/vehiculo';

@Component({
  selector: 'app-busqueda-vehiculo',
  templateUrl: './busqueda-vehiculo.component.html',
  styleUrls: ['./busqueda-vehiculo.component.css']
})
export class BusquedaVehiculoComponent implements OnInit {

  muestra: boolean;

  @Output() lanzador = new EventEmitter();
  vehiculo:Vehiculo;
  
  modelo:string;

  respuesta:any;
  constructor(private _servicio:VehiculosServiceService) { }


  BuscarVehiculo(){
    this._servicio.ServiceTraerUnVehiculo(this.modelo)
    .subscribe((data)=>{

      let rtaJson=JSON.parse(data._body);

      if(rtaJson.modelo==1)
      {
        console.log(rtaJson);
        this.lanzador.emit(rtaJson);
      }
      else{
        console.log(rtaJson);
        this.respuesta=rtaJson;
        this.muestra=true;
      }
    })
  }





  ngOnInit() {
  }

}
