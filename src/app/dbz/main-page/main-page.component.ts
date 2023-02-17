import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personaje: Personaje = {
    nombre: '',
    poder: 0
  }
  
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 0
    },
    {
      nombre: 'Vegeta',
      poder: 0
    },
  ]

  
}
