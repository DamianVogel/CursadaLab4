import { Component, OnInit, Input } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  
  @Input () id: number;

  constructor(public _servicio:MascotasService) {
    
   }

  ngOnInit() {
  }

  public Mostrar()
  {
    console.log(this.id);
  }

  public BorrarMascota(id)
  {
    this._servicio.ServiceBajaMascota(id).subscribe(data => {   
      //this.listaMascotas = JSON.parse(data._body);
      //console.log(this.listaMascotas);
      

    })
  }
} 
