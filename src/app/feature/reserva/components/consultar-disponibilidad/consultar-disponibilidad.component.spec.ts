import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDisponibilidadComponent } from './consultar-disponibilidad.component';

describe('ConsultarDisponibilidadComponent', () => {
  let component: ConsultarDisponibilidadComponent;
  let fixture: ComponentFixture<ConsultarDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarDisponibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
