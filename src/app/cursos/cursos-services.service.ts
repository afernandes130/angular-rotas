import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServicesService {

  cursos: any = [
    {id:1, desc:'Angular2'},
    {id:2, desc:'React Native'},
    {id:3, desc:'C#'},
    {id:4, desc:'Python'}
  ]

  get(){
    return this.cursos
  }

  GetId(id){
    return this.cursos.find((curso) => curso.id == id)
  }

  constructor() { }
}
