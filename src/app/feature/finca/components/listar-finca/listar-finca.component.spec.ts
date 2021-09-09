import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListarFincaComponent } from './listar-finca.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FincaService } from '../../shared/service/finca.service';
import { Finca } from '../../shared/model/finca';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarFincaComponent', () => {
  let component: ListarFincaComponent;
  let fixture: ComponentFixture<ListarFincaComponent>;
  let fincaService: FincaService;
  const listaFincas: Finca[] = [new Finca('1', 'el paraiso', 'calle 123', '400000', '6'),
  new Finca('2', 'el refugio', 'calle 321', '500000', '8')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarFincaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [FincaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFincaComponent);
    component = fixture.componentInstance;
    fincaService = TestBed.inject(FincaService);
    spyOn(fincaService, 'consultar').and.returnValue(
      of(listaFincas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaFincas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
