import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarDisponibilidadComponent } from './listar-disponibilidad.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DisponibilidadService } from '../../shared/service/disponibilidad.service';
import { Disponibilidad } from '../../shared/model/disponibilidad';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarDisponibilidadComponent', () => {
  let component: ListarDisponibilidadComponent;
  let fixture: ComponentFixture<ListarDisponibilidadComponent>;
  let disponibilidadService: DisponibilidadService;
  const listaDisponibilidads: Disponibilidad[] = [new Disponibilidad('1', 'Disponibilidad 1'), new Disponibilidad('2', 'Disponibilidad 2')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDisponibilidadComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [DisponibilidadService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDisponibilidadComponent);
    component = fixture.componentInstance;
    disponibilidadService = TestBed.inject(DisponibilidadService);
    spyOn(disponibilidadService, 'consultar').and.returnValue(
      of(listaDisponibilidads)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaDisponibilidads.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
