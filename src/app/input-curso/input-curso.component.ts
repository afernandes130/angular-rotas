import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { BroadcastEventService } from '../shared/broadcast-event.service';


@Component({
  selector: 'input-curso',
  templateUrl: './input-curso.component.html',
  styleUrls: ['./input-curso.component.css']
})
export class InputCursoComponent implements OnInit {

  @Output() mudouid = new EventEmitter;

  constructor() { }

  MudouId(event){
    console.log(event)
  }

  keyuppress(event){
    BroadcastEventService.get("idcurso").emit((<HTMLInputElement>event.target).value)
    console.log((<HTMLInputElement>event.target).value)
  }

  ngOnInit(): void {
  }

}
