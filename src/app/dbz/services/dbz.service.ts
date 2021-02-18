import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//Servicios es un lugar centralizado de información 

@Injectable()
export class DbzService {

    //propiedades
    //la modificacion del array solo puede hacerse en el servicio
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    //getter que da acceso desde fuera
    get personajes(): Personaje[] {
        return [...this._personajes]; //[...] rompe el paso por referencia para evitar que se modifique fuera del aservicio
    }

    //podria inyectar otro servicio, cuidado con hacer ciclos
    constructor() { }

    //metodos
    agregarPersonaje( personaje: Personaje ){
        this._personajes.push(personaje);
    }
}