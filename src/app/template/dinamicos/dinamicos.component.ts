import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

  interface Persona{
    nombre:string;
    favoritos:Favorito[];
  }
  interface Favorito{
    id:number;
    nombre:string;
  }


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent   {
  
  @ViewChild('miFormulario') miFormulario!:NgForm; //Para hacer referencía a una propiedad local en nuestro HTML

  
  nuevoJuego:string='';


  persona: Persona={
    nombre:'Alejandro',
    favoritos:[
      {id:1, nombre:'Halo'},
      {id:2, nombre:'Doom'},
      {id:3, nombre:'Fallout'},
      {id:4, nombre:'TES'},
      {id:5, nombre:'Guild Wars 2'},
    ]
  }

  nombreValido(){
    return this.miFormulario?.controls.nombre?.errors&&this.miFormulario?.controls.nombre?.touched;
  }
  
  agregarJuego(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1);
  }
  guardar(){
    console.log('Formulario Posteado');
  }
}
