import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalhes-curso',
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.css']
})
export class DetalhesCursoComponent implements OnInit {

  idcurso: string = "";
  subscription: Subscription;

  constructor(private _route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(
      (params: any) => {
       this.idcurso = params['idcurso']
      }
    )
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe    
  }

}
