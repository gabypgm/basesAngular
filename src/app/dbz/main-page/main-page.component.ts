import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../service/dbz.service';

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

  constructor() {
  
  }

  
}
