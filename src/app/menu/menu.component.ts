import { Component, OnInit, Input, EventEmitter, OnDestroy } from '@angular/core';

import { BroadcastEventService } from './../shared/broadcast-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  event : Subscription;
  idcurso: string;
  @Input() isvisible : boolean;

  constructor() { 
    this.event = BroadcastEventService.get("idcurso").subscribe((param: string) => this.idcurso = param );
  }

  ngOnInit(): void { }

  OnDestro():void {
    this.event.unsubscribe();
  }

}
