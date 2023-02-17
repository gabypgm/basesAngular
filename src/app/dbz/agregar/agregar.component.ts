import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input('data') personajes: Personaje[] =  [] 

  @Input('nuevo') personaje: Personaje = {
      nombre: '',
      poder:0
  }


  agregar(){
    if(this.personaje.nombre.trim().length ===0){return}
    this.personajes.push( this.personaje) 
    this.personaje ={
      nombre: '',
      poder: 0
    }
    console.log(this.personajes);
    
  }

}
