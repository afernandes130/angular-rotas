import { BroadcastEventService } from './shared/broadcast-event.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rotas';
  isauthentication: Subscription;
  isvisible : boolean = false;


  constructor(private _auth : AuthService) { }

  ngOnInit(): void {
    this.isauthentication = BroadcastEventService.get("isautenticated").subscribe((param : boolean ) => this.isvisible = param)
  }

  OnDestroy(){
    this.isauthentication.unsubscribe();
  }
}
