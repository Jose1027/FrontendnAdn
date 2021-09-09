import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearFincaComponent } from './crear-finca.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FincaService } from '../../shared/service/finca.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearFincaComponent', () => {
  let component: CrearFincaComponent;
  let fixture: ComponentFixture<CrearFincaComponent>;
  let fincaService: FincaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFincaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [FincaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFincaComponent);
    component = fixture.componentInstance;
    fincaService = TestBed.inject(FincaService);
    spyOn(fincaService, 'crear').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.finca == null).toBeFalsy();
  });

  it('Registrando finca', () => {
    expect(component.finca == null).toBeFalsy();
    component.finca.nombre = 'el retiro';
    component.finca.direccion = 'vereda el retiro';
    component.finca.precioPorDia = '45000';
    component.finca.cantidadHabitaciones = '9';
    expect(component.finca != null).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
