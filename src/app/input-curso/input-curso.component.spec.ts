import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCursoComponent } from './input-curso.component';

describe('InputCursoComponent', () => {
  let component: InputCursoComponent;
  let fixture: ComponentFixture<InputCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
