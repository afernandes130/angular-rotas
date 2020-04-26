import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoLocalizadoComponent } from './curso-nao-localizado/curso-nao-localizado.component';

const courseroutes: Routes = [
  {path:'', component: CursosComponent},
  {path: 'detalhes-curso/:idcurso', component:DetalhesCursoComponent},
  {path: 'curso-n-localizado', component:CursoNaoLocalizadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(courseroutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
