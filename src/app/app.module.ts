import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InputCursoComponent } from './input-curso/input-curso.component'
;
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/aluno.module';

import { CursosServicesService } from './cursos/cursos-services.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    InputCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule
  ],
  providers: [CursosServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
