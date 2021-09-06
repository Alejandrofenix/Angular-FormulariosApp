import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BasicosComponent } from './template/basicos/basicos.component';
import { DinamicosComponent } from './template/dinamicos/dinamicos.component';
import { SwitchesComponent } from './template/switches/switches.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
