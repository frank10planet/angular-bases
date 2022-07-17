import { Component  } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
})
export class ListadosComponent {

heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];

heroeBorrado: string = '';

borrarHeroe():void {
  //this.heroes.pop();
  this.heroeBorrado = this.heroes.shift() || '';
  
}

}
