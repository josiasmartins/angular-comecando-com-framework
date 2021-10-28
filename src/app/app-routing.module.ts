import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  // path: caminho que vai aparecer no navegador
  // component: seu component
  // se a rota estiver vazia, redireciona para extrato.
  // O parâmetro pathMatch: rediciona toda tela para esse componente
  { path: '', redirectTo: 'extrato', pathMatch: 'full'},
  { path: 'extrato', component: ExtratoComponent},
  { path: 'nova-transferencia', component: NovaTransferenciaComponent},
]

// o NgModule precisa de duas coisa: importar e exportar o routingModule
@NgModule({
  // utiliza-se o forRoot() para o módulo principal
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
