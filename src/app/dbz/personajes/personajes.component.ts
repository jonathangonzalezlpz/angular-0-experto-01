import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = []; //podría cambiarse el nombre incluso
  get personajes(): Personaje[]{
    return this._dbzService.personajes;
  }

  constructor(private _dbzService: DbzService) { }


}
