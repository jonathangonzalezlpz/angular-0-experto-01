import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //que contiene el modulo (componentes pipes...)
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //cosas visibles fuera del módulo
        ListadoComponent
    ],
    imports: [ //módulos normalmente
        CommonModule //necesario para directivas ngif ngfor
    ]

})

export class HeroesModule{

}