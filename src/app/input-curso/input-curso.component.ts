import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'input-curso',
  templateUrl: './input-curso.component.html',
  styleUrls: ['./input-curso.component.css']
})
export class InputCursoComponent implements OnInit {

  @Input() id: string;
  @Output() mudouid = new EventEmitter;

  constructor() { }

  MudouId(event){
    console.log(event)
  }

  keyuppress(event){
    this.id = (<HTMLInputElement>event.target).value
    this.mudouid.emit(this.id)
    console.log(this.id);
  }

  ngOnInit(): void {
  }

}
