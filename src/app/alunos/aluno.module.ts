
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunosRouteModule } from './alunos.routing.module';

@NgModule({
    declarations:[
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalhesComponent
    ],
    imports:[
        CommonModule,
        AlunosRouteModule
    ]

})

export class AlunosModule {}