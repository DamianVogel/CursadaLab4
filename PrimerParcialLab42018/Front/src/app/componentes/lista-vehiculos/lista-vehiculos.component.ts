import { Component, OnInit } from '@angular/core';
import { VehiculosServiceService } from '../../servicios/vehiculos-service.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {


  public listaVehiculos: any;

  constructor(private _servicio:VehiculosServiceService) {
    this._servicio.ServiceTraerVehiculos().subscribe(data => {   
      this.listaVehiculos = JSON.parse(data._body);
      console.log(this.listaVehiculos);
      

    })

   }

  ngOnInit() {
  }

}
