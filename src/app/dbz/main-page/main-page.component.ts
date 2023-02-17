import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


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

  personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    if(this.personaje.nombre.trim().length ===0){return}
    this.personajes.push( this.personaje) 
    this.personaje ={
      nombre: '',
      poder: 0
    }

    
  }

}
