import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../servicios/mascotas.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  public listaMascotas: any;

  constructor(private _servicio:MascotasService) {
    this._servicio.ServiceTraerMascotas().subscribe(data => {   
      this.listaMascotas = JSON.parse(data._body);
      console.log(this.listaMascotas);
      

    })

   }

  ngOnInit() {
  }

  // public BorrarMascota(id)
  // {
  //   this._servicio.ServiceBajaMascota(id).subscribe(data => {   
  //     //this.listaMascotas = JSON.parse(data._body);
  //     console.log(this.listaMascotas);
      

  //   })

  //}



}