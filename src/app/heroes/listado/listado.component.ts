import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes : string[] = ['Gaby', 'Test', 'Guop'];
  heroeBorrado: any = '';
  flagMostraHero = false

   borrarHero() {
    this.heroeBorrado = this.heroes.shift() || ''
    this.flagMostraHero = true
  

  }

}
