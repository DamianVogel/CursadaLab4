import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {Observable} from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

//import { HttpClientModule }    from '@angular/common/http';

import { MiHttpService } from './servicios/mi-http.service';
import { HeladosService } from './servicios/heladosService.service';
import { TemaComponent } from './componentes/tema/tema.component';
import { CuestionarioComponent } from './componentes/cuestionario/cuestionario.component';
import { PreguntaComponent } from './componentes/pregunta/pregunta.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeladosComponent } from './componentes/helados/helados.component';
import { TraerUnHeladoComponent } from './componentes/traer-un-helado/traer-un-helado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListadoHeladosComponent } from './componentes/listado-helados/listado-helados.component';  
import { MatTableModule } from '@angular/material/table';  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TablaMatComponent } from './componentes/tabla-mat/tabla-mat.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormAltaComponent } from './componentes/form-alta/form-alta.component';
import { RespuestaBuscarComponent } from './componentes/respuesta-buscar/respuesta-buscar.component';
import { BusquedaHeladoComponent } from './componentes/busqueda-helado/busqueda-helado.component';
import {MatCardModule} from '@angular/material/card';
import { ListaVehiculosComponent } from './componentes/lista-vehiculos/lista-vehiculos.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { BusquedaVehiculoComponent } from './componentes/busqueda-vehiculo/busqueda-vehiculo.component';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';
import { ListaMascotasComponent } from './componentes/lista-mascotas/lista-mascotas.component';
import { MascotasService } from './servicios/mascotas.service';
import { BusquedaMascotaComponent } from './componentes/busqueda-mascota/busqueda-mascota.component';
import { MuestraMascotaComponent } from './componentes/muestra-mascota/muestra-mascota.component';

const miRuteo = [{path:'pruebaRuteo', component:TemaComponent},
                 {path:'pruebaParcial', component:HeladosComponent},
                 {path:'Parcial' , component:AppComponent},
                 {path:'RecuParcial' , component:AppComponent},
                ]

@NgModule({
  declarations: [
    AppComponent,
    TemaComponent,
    CuestionarioComponent,
    PreguntaComponent,
    HeladosComponent,
    TraerUnHeladoComponent,
    PrincipalComponent,
    ListadoHeladosComponent,
    TablaMatComponent,
    BotonBorrarComponent,
    CabeceraComponent,
    FormAltaComponent,
    RespuestaBuscarComponent,
    BusquedaHeladoComponent,
    ListaVehiculosComponent,
    BotonComponent,
    BusquedaVehiculoComponent,
    MascotasComponent,
    ListaMascotasComponent,
    BusquedaMascotaComponent,
    MuestraMascotaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(miRuteo)

    //HttpClientModule
    
  ],
  providers: [
    MiHttpService,
    HeladosService,
    MascotasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
