import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';

import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from '../guards/alunos.guard';


const alunosroute: Routes = [
    {path:'', component: AlunosComponent, 
        canActivateChild:[AlunosGuard],
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