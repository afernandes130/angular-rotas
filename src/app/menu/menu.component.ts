import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() idcurso: string;

  constructor() { }

  ngOnInit(): void {
  }

}
