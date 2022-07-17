import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { heroeComponent } from './heroe/heroe.componenet';
import { ListadosComponent } from './listados/listados.component';

@NgModule({
    declarations:[
        heroeComponent,
        ListadosComponent
    ],
    exports: [
        ListadosComponent
    ],
    imports: [
       CommonModule
    ]
})
export class HeroesModule {}