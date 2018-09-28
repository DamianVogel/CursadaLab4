import { Component, OnInit } from '@angular/core';
import { GenericoService } from '../../servicios/generico.service';


@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  listaHelados: any;

  constructor(private servicio:GenericoService) {
    
    /*
    this.listaHelados = this.servicio.traerHelados().subscribe(
      data=>(JSON.parse(data._body)));
      */
        
     this.listaHelados = this.servicio.traerJugadores().subscribe(
      data=>JSON.parse(data._body)
        );

        
   }

  ngOnInit() {
    
    
    console.log(this.listaHelados);

  }

  
}
