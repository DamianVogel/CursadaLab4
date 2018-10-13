import { Component, OnInit, Input } from '@angular/core';
import { GenericoService} from '../../servicios/generico.service';
import { Helado } from '../../clases/helado';

@Component({
  selector: 'app-traer-un-helado',
  templateUrl: './traer-un-helado.component.html',
  styleUrls: ['./traer-un-helado.component.css']
})
export class TraerUnHeladoComponent implements OnInit {

  unHeladoComponent: Helado;

  listaHeladosComponent: any;

  datosToken: any;

  constructor(private _servicio:GenericoService) { }

  
  TraerUnHelado(idHelado){
   
    this._servicio.ServiceTraerUnHelado(idHelado).subscribe(data =>{
      this.unHeladoComponent = JSON.parse(data._body);
    });

  //console.log("entro en TraerUnHelado");
  //console.log(idHelado);
  }

  
MostrarHelados(){
    
  this._servicio.ServiceTraerHelados().subscribe(data => {   
  this.listaHeladosComponent = JSON.parse(data._body)});
  
}

Login(loginDatos){
  this._servicio.ServiceLogin(loginDatos).subscribe(data =>{
    this.datosToken = JSON.parse(data._body);
    console.log(this.datosToken);
  
   
  
  });


}





  ngOnInit() {
  }

}
