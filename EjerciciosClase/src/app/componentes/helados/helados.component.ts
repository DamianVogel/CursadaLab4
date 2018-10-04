import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GenericoService } from '../../servicios/generico.service';
import { Helado } from '../../clases/helado';
//import { InputGroup  } from 'primeng/inputtext';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  //listaHelados: any;

  //unHelado: Helado;

  helado : Helado;

  resultado : any;

  mostrarHelados: boolean = false;

  @Output() heladosEmitter: EventEmitter<any> = new EventEmitter();

  @Input() listaHelados: any;

  @Input() unHelado: Helado;

  constructor(private _servicio:GenericoService) {
   
  }

  ngOnInit() {
    
  }

  AltaHelado(){

    this.helado = new Helado('Crema del Cielo','Crema',1);

    console.log(this.helado);

    this._servicio.ServiceAltaHelado(this.helado)
    .subscribe(
     // data => { this.resultado = data._body;}
    )
    ;
  
  }

  MostrarUnHelado(idHelado){
    
    this.heladosEmitter.emit(idHelado);
    
   
  }

  
  MostrarHeladosComponent(){
  

    this.heladosEmitter.emit();
  
    
    if(this.mostrarHelados == false){ 
      
      this.mostrarHelados = true;
    
    }  
    else{

      this.mostrarHelados = false;
    
    }
  
  
  }

  
}
