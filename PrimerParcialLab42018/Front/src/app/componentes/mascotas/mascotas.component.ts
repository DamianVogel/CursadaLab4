import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../servicios/mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
