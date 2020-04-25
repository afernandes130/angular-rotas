import { Subscription } from 'rxjs';
import { CursosServicesService } from './cursos-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:[];
  routeparam : Subscription;
  routenavigate : Subscription;
  npagina : number;

  NextPage(){
    this._router.navigate(['/cursos'],{queryParams:{'pagina' : ++this.npagina}})
  }

  constructor(private _cursos : CursosServicesService, private  _activiteRoute : ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
    this.cursos = this._cursos.get();
    this.routeparam = this._activiteRoute.queryParams.subscribe((queryPamans: any) =>  this.npagina = queryPamans['pagina']) 
  }

}
