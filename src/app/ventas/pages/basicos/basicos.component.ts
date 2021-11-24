import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'carlos';
  nombreUpper: string = 'CARLOS';
  nombreCompleto: string = 'cARloS cAstiLlo';

  fecha: Date = new Date(); //el día de hoy

}
