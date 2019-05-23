import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosFormComponent } from './cursos/cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';

const routes: Routes = [
  { path: 'cursos', component: CursosListaComponent },
  { path: 'cursos/novo', component: CursosFormComponent },
  { path: 'cursos/editar/:id', component: CursosFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
