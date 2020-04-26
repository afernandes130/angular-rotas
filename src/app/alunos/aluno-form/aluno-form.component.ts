import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  subscription : Subscription
  aluno : any

  constructor(private _activedroute : ActivatedRoute, private _alunos : AlunosService) { }

  ngOnInit(): void {
    this.subscription = this._activedroute.params.subscribe(
      (params : any) => this.aluno = this._alunos.GetbyId(params['id'])
    )

    console.log(this.aluno)

  }

}
