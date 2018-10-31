import { Component, OnInit } from '@angular/core';
import { VehiculosServiceService  } from '../../servicios/vehiculos-service.service';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Helado } from '../../clases/helado';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Mascota} from '../../clases/mascota';
import { MascotasService } from 'src/app/servicios/mascotas.service';



@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

  mascota:Mascota;
  nombre:string;
  tipo:string;
  fechaDeNacimiento:string;
  
  resultado: string;

  constructor( private _servicio:MascotasService) { }

  GuardarMascota(){
    
    this.mascota = new Mascota(this.nombre, this.tipo ,this.fechaDeNacimiento);
     this._servicio.ServiceAltaMascota(this.mascota).subscribe(data=>{
       console.log(data._body);
     });
    //  .then((data)=>{console.log(data)})
    // .catch((data)=>{console.log(data)});

     
     
     //.subscribe(
       //data => { this.resultado = data._body;}
    // );
    
    



    }

  ngOnInit() {
  }

}
