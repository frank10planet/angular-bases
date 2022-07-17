import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.componenet.html'
})
export class heroeComponent {
    nombre: string = 'Ironman';
    edad: number = 30;

    get nombreCapitalizado(): String{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;

    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 27;
    }
}