import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ComoAjudarComponent } from './como-ajudar/como-ajudar.component';
import { AOngComponent } from './a-ong/a-ong.component';
import { AdoteComponent } from './adote/adote.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: InicioComponent
  // },
  // {
  //   path: 'inicio',
  //   component: InicioComponent
  // },
  // {
  //   path: 'contato',
  //   component: ContatoComponent
  // },
  // {
  //   path: 'quem-somos',
  //   component: QuemSomosComponent
  // },
  // {
  //   path: 'como-ajudar',
  //   component: ComoAjudarComponent
  // },
  // {
  //   path: 'a-ong',
  //   component: AOngComponent
  // },
  // {
  //   path: 'adote',
  //   component: AdoteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
