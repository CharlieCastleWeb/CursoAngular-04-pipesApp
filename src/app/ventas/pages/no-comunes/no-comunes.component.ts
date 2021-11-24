import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  // i18nSelect
  nombre: string = 'Carlos';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  cambiarPersona() {
    if (this.genero === 'masculino') {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Carlos';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    if (this.clientes.length === 0) {
      this.clientes = ['Maria', 'Pedro', 'Juan', 'Hernando', 'Eduardo', 'Fernando'];
    }
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Carlos',
    edad: '38',
    direccion: 'Ciutadella de Menorca, España'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
