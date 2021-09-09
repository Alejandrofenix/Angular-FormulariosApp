import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm; //Para hacer referencía a una propiedad local en nuestro HTML

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid  && this.miFormulario?.controls.producto?.touched
    //El uso de ? significa que el valor puede ser null
  }

  guardar(){
    console.log('Submit hecho', this.miFormulario);

    
  }

}
