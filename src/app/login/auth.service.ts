import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isautenticated : boolean = false;


  Login(usuario: Usuario){
    if (usuario.login == 'adriano@email.com.br' && usuario.senha == '123456') {
      this.isautenticated = true
      this._router.navigate(['/']);
    }
    else{
      this.isautenticated = false
      this._router.navigate(['/login']);
      console.log('Usuario ou senha invalido!')
    }
  }

  logout(){
    this.isautenticated = false
    this._router.navigate(['/login']);
    
  }

  constructor(private _router : Router) { }
}
