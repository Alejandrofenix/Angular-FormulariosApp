import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti', [Validators.required, Validators.minLength(3)]], //Se coloca entre llaves ya que si no se hace esto, se declararian como validadores asyncronos
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0,[Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


}
