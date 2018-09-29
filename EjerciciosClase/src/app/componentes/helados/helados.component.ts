import { Component, OnInit } from '@angular/core';
import { GenericoService } from '../../servicios/generico.service';


@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  listaHelados: any;

  mostrarHelados: boolean = false;

  constructor(private servicio:GenericoService) {
    
    this.servicio.traerHelados().subscribe(data => {   
      this.listaHelados = JSON.parse(data._body);
    })
    
  }

  ngOnInit() {
    
    
  }

  MostrarHelados(){
    if(this.mostrarHelados == false){ 
      
      this.mostrarHelados = true;
    
    }  
    else{

      this.mostrarHelados = false;
    
    }
  
  
  }


  
}
