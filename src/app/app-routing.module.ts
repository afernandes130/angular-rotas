import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cursos', component: CursosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'detalhes-curso/:idcurso', component:DetalhesCursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
