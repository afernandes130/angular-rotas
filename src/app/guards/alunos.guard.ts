import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AlunosGuard implements CanActivateChild {
    constructor(private _auth: AuthService) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
       
        if (state.url.includes("edit") && route.params['id'] == 1 ) {
            console.log("Acesso negado");
            return false;    
            
        }

        return true;
    }
}