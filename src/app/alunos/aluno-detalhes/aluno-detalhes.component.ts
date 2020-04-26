import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

routeinfo: Subscription
detalhesaluno: any

edit(){
  this._router.navigate(['/alunos', this.detalhesaluno.id, 'edit'])
  }

  constructor(private _activiteroute : ActivatedRoute, private _aluno : AlunosService, private _router : Router) { }

  ngOnInit(): void {
    this.routeinfo = this._activiteroute.params.subscribe(
      (params: any) =>
      this.detalhesaluno = this._aluno.GetbyId((params['id'] == null ? 0 : params['id']  ))
      )
      if (this.detalhesaluno == null) {
       this.detalhesaluno = {} ;
      }
  }

  OnDestroy(){
    this.routeinfo.unsubscribe;
  }

}
