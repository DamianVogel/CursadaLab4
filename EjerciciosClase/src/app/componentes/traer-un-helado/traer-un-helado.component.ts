import { Component, OnInit, Input } from '@angular/core';
import { GenericoService} from '../../servicios/generico.service';
import { Helado } from '../../clases/helado';

@Component({
  selector: 'app-traer-un-helado',
  templateUrl: './traer-un-helado.component.html',
  styleUrls: ['./traer-un-helado.component.css']
})
export class TraerUnHeladoComponent implements OnInit {

  unHelado: Helado;

  constructor(private _servicio:GenericoService) { }

  @Input() idHelado:number;
  
  MostrarUnHelado(idHelado){
    
    this._servicio.ServiceTraerUnHelado(idHelado).subscribe(data =>{
      this.unHelado = JSON.parse(data._body);
    });

    console.log(this.idHelado);
  }

  

  ngOnInit() {
  }

}
