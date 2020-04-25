
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CursoNaoLocalizadoComponent } from './curso-nao-localizado/curso-nao-localizado.component';
import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';
import { CursosComponent } from './cursos.component';
import { CourseRoutingModule } from './cursos.routing.module';

@NgModule({
    declarations: [
      CursosComponent,
      DetalhesCursoComponent,
      CursoNaoLocalizadoComponent
    ],
    imports: [
        CommonModule,
        CourseRoutingModule
    ]})

  export class CursosModule { }