import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DBZService {
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 0
        },
        {
          nombre: 'Vegeta',
          poder: 0
        },
      ]

      get personajes(): Personaje[] {
        return [...this._personajes]
      }

    constructor() {}

    agregarPersonaje (personaje: Personaje) {
        this._personajes.push(personaje)
    }




}