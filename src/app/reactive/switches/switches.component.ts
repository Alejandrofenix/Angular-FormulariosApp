import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [true, Validators.requiredTrue]
  });


  persona = {
    genero: 'F',
    notificaciones: false,
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset(
      { ...this.persona, condiciones: false }
    );


    this.miFormulario.valueChanges.subscribe(form => {
      delete form.condiciones;
      this.persona = form;
    });

    // Lo mismo de arriba pero usando destructuración en la ual extraeremos las condiciones del resto de argumentos
    // this.miFormulario.valueChanges.subscribe(({condiciones,...rest}) => {
    //   this.persona = rest;
    // });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;


  }




}
