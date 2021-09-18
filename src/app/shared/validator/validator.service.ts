import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
//Validacioens mediante servicios
export class ValidatorService {

 nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
 emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  

  constructor() { }

  
  usernameRepetido(control:FormControl): ValidationErrors|null{
    const valor:string=control.value?.trim().toLowerCase();
    if(valor==='alejandrofenix'){
      return {
        userRepetido:true
      }
    }
    return null;
  }


  camposIguales(campo1:string, campo2:string){
    return ( formGroup: AbstractControl):ValidationErrors | null =>{
      const pass = formGroup.get(campo1)?.value;
      const confirmPass = formGroup.get(campo2)?.value;

      if(pass !== confirmPass){
        formGroup.get(campo2)?.setErrors({noIguales:true});
        return {noIguaes:true}
      }
      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }
}
