import { Component, OnInit } from '@angular/core';
import { GenericoService } from '../../servicios/generico.service';
import { Helado } from '../../clases/helado';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  listaHelados: any;

  helado : any;

  resultado : any;

  mostrarHelados: boolean = false;

  constructor(private servicio:GenericoService) {
    
    this.servicio.traerHelados().subscribe(data => {   
      this.listaHelados = JSON.parse(data._body);
    })
    
  }

  ngOnInit() {
    
    this.helado = new Helado('Mascarpoe','Crema',1);

    console.log(this.helado);

    this.servicio.AltaHelado(this.helado)
    .subscribe(
     // data => { this.resultado = data._body;}
    )
    ;
    
    

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
