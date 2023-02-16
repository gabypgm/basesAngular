import {  Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
       <h1>nooo {{titulo}}</h1>
       <button (click)="acumular(base)">+{{base}}</button><span>{{numero}}</span><button (click)="acumular(-base)">-{{base}}</button>
       <h3>La Base es: <strong> {{base}}</strong> </h3>
    `
})


export class ContadorComponent {
    titulo:string = 'bases';
    numero:number = 10;
    base: number = 5;

    acumular(valor:number) {
        this.numero += valor
    }

}