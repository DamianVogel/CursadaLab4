import { Component, OnInit, Input } from '@angular/core';
import { CuestionarioComponent } from '../cuestionario/cuestionario.component';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  /*  CODIGO FUNCIONANDO
  constructor() { }

  public tema="temadeinicio";
  public contador = 0;

  funcionContador(){
   this.contador++;
  }


  ngOnInit() {
  }

  */

 constructor() { }

 public temaEnTema="temadeinicio";
 public contador = 0;

 funcionContador(){
  this.contador++;
 }


 ngOnInit() {
 }




}
