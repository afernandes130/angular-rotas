import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario = new Usuario();

  logar(){
    this._auth.Login(this.usuario);
  }

  constructor(private _auth : AuthService) { }

  ngOnInit(): void {

  }

}
