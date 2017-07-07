// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador @Component, selector es la etiqueta y template es la plantilla
@Component({
    selector: 'my-app',
    templateUrl: './app/views/home.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { 

    public titulo:string;

    constructor(){
        this.titulo = "Autos Maravilla"
    }

}