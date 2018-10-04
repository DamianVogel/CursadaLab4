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

  helado : any;

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

    this.helado = new Helado('Mascarpoe','Crema',1);

    console.log(this.helado);

    this._servicio.ServiceAltaHelado(this.helado)
    .subscribe(
     // data => { this.resultado = data._body;}
    )
    ;
  
  }

  MostrarUnHelado(idHelado){
    //console.log(idHelado + "en Helados component")
    
    this.heladosEmitter.emit(idHelado);
    
    /*
    this._servicio.ServiceTraerUnHelado(idHelado).subscribe(data =>{
      this.unHelado = JSON.parse(data._body);
    });

    console.log(this.unHelado);
    */
  }

  
  MostrarHeladosComponent(){
  
    //console.log("entro a MostrarHeladosComponent");

    this.heladosEmitter.emit();
  
    
    if(this.mostrarHelados == false){ 
      
      this.mostrarHelados = true;
    
    }  
    else{

      this.mostrarHelados = false;
    
    }
  
    /* 
    this._servicio.ServiceTraerHelados().subscribe(data => {   
      this.listaHelados = JSON.parse(data._body)});
   */  

  
  }

  
}
