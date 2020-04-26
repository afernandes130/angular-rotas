import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: any = [
    {id: 1, nome:"Adriano Fernandes", email: "afernandes130@hotmail.com"},
    {id: 2, nome:"Caio Ragazzi", email: "ragazzi_caio@hotmail.com"},
    {id: 3, nome:"Ciro Capotorto", email: "ciro_rd350@gmail.com"},
    {id: 4, nome:"Karina Ragazzi", email: "ragazzi_karina@hotmail.com"},
    {id: 5, nome:"Renan Magalhaes", email: "renan@hotmail.com"}
  ]

  Get(){
    return this.alunos;
  }

  GetbyId(id){
    return this.alunos.find((aluno) => aluno.id == id)
  }

  constructor() { }
}
