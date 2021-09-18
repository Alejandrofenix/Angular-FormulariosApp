import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { nombreApellidoPattern, emailPattern, usernameRepetido } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup= this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username:['',[Validators.required,this.validatorService.usernameRepetido]],

  });
    
  constructor(private fb:FormBuilder, private validatorService:ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Alejandro',
      email:'usuario@live.com',
      username:'juanito_98'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
    &&this.miFormulario.get(campo)?.touched;
  }


  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
