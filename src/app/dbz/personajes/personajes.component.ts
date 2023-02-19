import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //@Input('data') personajes: Personaje [] =[]
  constructor(private dbzService: DBZService) {

  }
  get personajes() {
    return this.dbzService.personajes
  }
}
