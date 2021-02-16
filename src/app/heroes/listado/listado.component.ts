import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  constructor() { 
    
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    /* otra solución
    const heroeBorrado = this.heroes.shift(); //borra el primero
    heroeBorrado?this.heroeBorrado=heroeBorrado : '';*/
    //this.heroes.pop(); borra el último
  }
  /*
  //Normalmente se utiliza para inicializar cosas por ej
  //Si nos traemos información, primero se ejecuta el constructor
  //y después el ngOnInit
  ngOnInit(): void {
  }
  */

}
