import { FormsModule } from '@angular/forms';

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunosRouteModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';

@NgModule({
    declarations:[
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalhesComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        AlunosRouteModule
    ],
    providers: [AlunosService]

})

export class AlunosModule {}