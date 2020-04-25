import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';


const alunosroute: Routes = [
    {path:'alunos', component: AlunosComponent, 
        children:[
            {path:'new', component: AlunoFormComponent},
            {path:':id', component: AlunoDetalhesComponent},
            {path:':id/edit', component: AlunoFormComponent}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(alunosroute)],
    exports:[RouterModule]

})

export class AlunosRouteModule {}