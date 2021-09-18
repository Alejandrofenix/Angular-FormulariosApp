import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  miFormulario: FormGroup= this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.emailPattern)]],
    username:['',[Validators.required, this.usernameRepetido]],

  });
    
  constructor(private fb:FormBuilder) { }

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

  usernameRepetido(control:FormControl){
    const valor:string=control.value?.trim().toLowerCase();
    if(valor==='alejandrofenix'){
      return {
        userRepetido:true
      }
    }
    return null;

  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
