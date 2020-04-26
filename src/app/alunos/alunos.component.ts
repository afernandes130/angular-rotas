import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: any

  newaluno(){
    this._router.navigate(['/alunos/new'])
  }

  constructor(private _alunos : AlunosService, private _router : Router ) {}

  ngOnInit(): void {
    this.alunos = this._alunos.Get()

  }

}
