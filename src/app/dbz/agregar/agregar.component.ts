import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input('nuevo') personaje: Personaje = {
      nombre: '',
      poder:0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter <Personaje>();
  constructor(private dbzService: DBZService){

  }

  agregar(){
    if(this.personaje.nombre.trim().length ===0){return}
     //this.onNuevoPersonaje.emit(this.personaje)
     this.dbzService.agregarPersonaje(this.personaje)

    this.personaje ={
      nombre: '',
      poder: 0
    }    
  }

}
