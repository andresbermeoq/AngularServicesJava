import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: ClienteComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'registrarse', component: RegistrarseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
