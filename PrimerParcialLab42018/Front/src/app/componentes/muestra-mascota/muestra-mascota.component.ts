import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-muestra-mascota',
  templateUrl: './muestra-mascota.component.html',
  styleUrls: ['./muestra-mascota.component.css']
})
export class MuestraMascotaComponent implements OnInit {

  mascota: Mascota;


  constructor() { }

  MuestraMascota(mascota){


    console.log(mascota);
    this.mascota = mascota;

  }




  ngOnInit() {
  }

}
