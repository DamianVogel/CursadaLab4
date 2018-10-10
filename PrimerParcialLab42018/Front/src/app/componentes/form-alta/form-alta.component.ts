import { Component, OnInit } from '@angular/core';
import { VehiculosServiceService  } from '../../servicios/vehiculos-service.service';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Helado } from '../../clases/helado';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Vehiculo} from '../../clases/vehiculo';



@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

  vehiculo:Vehiculo;
  modelo:string;
  marca:string;
  cantidadDePuertas:number;
  
  resultado: string;

  constructor( private _servicio:VehiculosServiceService) { }

  GuardarVehiculo(){
    
    this.vehiculo = new Vehiculo(this.modelo, this.marca ,this.cantidadDePuertas);
     this._servicio.ServiceAltaVehiculo(this.vehiculo)
     .then((data)=>{console.log(data)})
    .catch((data)=>{console.log(data)});

     
     
     //.subscribe(
       //data => { this.resultado = data._body;}
    // );
    
    



    }

  ngOnInit() {
  }

}
