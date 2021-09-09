import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
 selector:'[customMin][ngModel]', //Solo se podra utilizar si se coloca customMin y en un ngModel
 providers:[{
  provide:NG_VALIDATORS,
  useExisting:CustomMinDirective,
  multi:true 
 }]
})

export class CustomMinDirective implements Validator{

 @Input() minimo!:number;

 constructor(  ){
  console.log('Directivas',this.minimo);
  
 }
 validate(control: FormControl) {
  const inputValue = control.value;

  return (inputValue<this.minimo)?{'customMin':true}:null;
  
 }
 
}