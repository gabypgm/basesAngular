import { Component, Input } from '@angular/core';

interface Personaje {
  nombre: string
  poder: number

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  @Input() pers: any[] = []

  personajes: Personaje[] = [
    {
      nombre: 'huio',
      poder: 0
    },
    {
      nombre: 'tesr',
      poder: 0
    },

  ]
  personaje: Personaje = {
    nombre: '',
    poder: 0
  }

 //cambiarNombre(event: any) {
 //   console.log(event)
 // }

  agregar(){
    if(this.personaje.nombre.trim().length ===0){return}
    console.log(this.personaje)

  }

}
