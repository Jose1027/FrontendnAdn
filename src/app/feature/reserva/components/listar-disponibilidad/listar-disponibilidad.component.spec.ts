import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDisponibilidadComponent } from './listar-disponibilidad.component';

describe('ListarDisponibilidadComponent', () => {
  let component: ListarDisponibilidadComponent;
  let fixture: ComponentFixture<ListarDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDisponibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
