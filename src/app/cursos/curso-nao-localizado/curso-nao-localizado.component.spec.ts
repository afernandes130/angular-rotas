import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNaoLocalizadoComponent } from './curso-nao-localizado.component';

describe('CursoNaoLocalizadoComponent', () => {
  let component: CursoNaoLocalizadoComponent;
  let fixture: ComponentFixture<CursoNaoLocalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNaoLocalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNaoLocalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
