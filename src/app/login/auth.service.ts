import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Usuario } from './usuario';
import { BroadcastEventService } from './../shared/broadcast-event.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isautenticated : boolean = false;

  Login(usuario: Usuario){
    if (usuario.login == 'adriano' && usuario.senha == '123456') {
      this.isautenticated = true
      this._router.navigate(['/']);
      BroadcastEventService.get('isautenticated').emit(this.isautenticated)
    }
    else{
      this.isautenticated = false
      this._router.navigate(['/login']);
      BroadcastEventService.get('isautenticated').emit(this.isautenticated)
    }
  }

  logout(){
    this.isautenticated = false
    this._router.navigate(['/login']);
  }

  

  constructor(private _router : Router) { }
}
