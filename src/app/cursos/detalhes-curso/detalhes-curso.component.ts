import { CursosServicesService } from '../cursos-services.service';
import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detalhes-curso',
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.css']
})
export class DetalhesCursoComponent implements OnInit {

  idcurso: string = "";
  subscription: Subscription;
  curso: any;

  constructor(private _route: ActivatedRoute, private _cursos : CursosServicesService, private _router : Router ) { }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(
      (params: any) => {
       this.idcurso = params['idcurso']
      }
    )
    console.log('passou')
    this.curso = this._cursos.GetId(this.idcurso)
    
    if (this.curso == null){
      this._router.navigate(['cursos/curso-n-localizado'])
    }

  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe    
  }

}
