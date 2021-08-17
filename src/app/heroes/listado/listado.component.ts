import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  heroesBorrados:string = '';

  borrarHeroe():void {
    console.log('Borrando...');
    this.heroesBorrados = this.heroes.shift() || '';
  }

}
