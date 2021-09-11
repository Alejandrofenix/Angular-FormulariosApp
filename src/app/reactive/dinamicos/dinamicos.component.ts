import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['Alejandro', [Validators.required, Validators.minLength(3)]],
      favoritos: this.fb.array([
        ['Metal Gear', Validators.required],
        ['Halo', Validators.required],
        ['Witcher', Validators.required],
        ['Fallout', Validators.required],
        ['Doom', Validators.required],
        ['God of War', Validators.required],

        //[] es el resumen de la instrucción this.fb.control('',)
      ], Validators.required)
    }
  );

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);//Control vease como un nuevo valor para el formulario

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  campoIsValid(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required)); //Es otra forma de setearle valores
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required));
    this.nuevoFavorito.reset();

  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}
