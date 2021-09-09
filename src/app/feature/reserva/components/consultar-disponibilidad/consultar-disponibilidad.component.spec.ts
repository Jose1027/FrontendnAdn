import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ConsultarDisponibilidadComponent } from './consultar-disponibilidad.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
import { FincaService } from 'src/app/feature/finca/shared/service/finca.service';
import { Finca } from 'src/app/feature/finca/shared/model/finca';
import { HttpService } from 'src/app/core/services/http.service';

describe('ConsultarDisponibilidadComponent', () => {
  let component: ConsultarDisponibilidadComponent;
  let fixture: ComponentFixture<ConsultarDisponibilidadComponent>;
  let fincaService: FincaService;
  const listaFincas: Finca[] =
    [new Finca('1', 'el paraiso', 'calle 123', '400000', '6'), new Finca('2', 'el refugio', 'calle 321', '500000', '8')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarDisponibilidadComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        DatePipe
      ],
      providers: [FincaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDisponibilidadComponent);
    component = fixture.componentInstance;
    fincaService = TestBed.inject(FincaService);
    spyOn(fincaService, 'consultarDisponibilidad').and.returnValue(
      of(listaFincas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fincaService.consultarDisponibilidad('2021-09-15', '2021-09-15').subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
