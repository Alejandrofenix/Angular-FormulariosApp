import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { nombreApellidoPattern, emailPattern, usernameRepetido } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    //Primer argumento valor del campo, 2nd validación sincrona y 3ero validación asincrona   
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.usernameRepetido]],
    password: ['', [Validators.required,Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required,]],

  }, {
   validators: this.validatorService.camposIguales('password','confirmPassword') 
  }
  );

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Test number',
      email: 'test1@test.com',
      username: 'test1',
      password:'123456',
      confirmPassword:'123456'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();

  }
}
