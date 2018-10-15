import { Component, OnInit, Input } from '@angular/core';
import { GenericoService} from '../../servicios/generico.service';
import { Helado } from '../../clases/helado';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-traer-un-helado',
  templateUrl: './traer-un-helado.component.html',
  styleUrls: ['./traer-un-helado.component.css']
})
export class TraerUnHeladoComponent implements OnInit {

  unHeladoComponent: Helado;

  listaHeladosComponent: any;

  datosToken: any;

  constructor(
  
    private _servicio:GenericoService,
    private router:Router
    
  ) { }

  
 TraerUnHelado(idHelado){
   
    this._servicio.ServiceTraerUnHelado(idHelado).subscribe(data =>{
      this.unHeladoComponent = JSON.parse(data._body);
    });

}

  
MostrarHelados(){
    
  this._servicio.ServiceTraerHelados().subscribe(data => {   
  this.listaHeladosComponent = JSON.parse(data._body)});
  
}

Login(loginDatos){
  this._servicio.ServiceLogin(loginDatos).subscribe(data =>{
    
    this.datosToken = JSON.parse(data._body);
    
   // console.log(this.datosToken);     
    
          if ( this.datosToken.token )
            {
              //console.log(this.datosToken.token);
              localStorage.setItem('token', this.datosToken.token);
              this.router.navigateByUrl("/pruebaRuteo");
            }
          
    /*        
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(this.datosToken.token);
    const expirationDate = helper.getTokenExpirationDate(this.datosToken.token);
    const isExpired = helper.isTokenExpired(this.datosToken.token);

    console.log(decodedToken);
    console.log(expirationDate);
    console.log(isExpired);
    */
  
  
  });
    
  

}





  ngOnInit() {
   



  }

}
