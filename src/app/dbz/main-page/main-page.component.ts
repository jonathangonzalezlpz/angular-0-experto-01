import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //asociado a la 1ª solucion personajes: Personaje[] = [];
  
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Solucion mejor que la 1ª con un getter
  /*get personajes(): Personaje[] {
    return this._dbzService.personajes;
  }*/

  //Inyeccion de dependencias
  /*
  constructor( private _dbzService: DbzService ) { 
    //Solucion pero no queremos trabajar del lado componente this.personajes = this._dbzService.personajes;
  }*/

  cambiarNombre ( event: any ){
    console.log(event.target.value);
  }
}
