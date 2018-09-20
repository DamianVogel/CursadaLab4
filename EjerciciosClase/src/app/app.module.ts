import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {Observable} from 'rxjs/Observable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //Observable
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
