import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ClienteComponent } from './cliente/cliente.component';
import {MatButtonModule} from '@angular/material/button';


import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PedidosComponent } from './pedidos/pedidos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PedidosComponent,
    InicioComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
