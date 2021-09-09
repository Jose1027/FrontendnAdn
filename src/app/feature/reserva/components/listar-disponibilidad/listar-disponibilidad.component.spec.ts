import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDisponibilidadComponent } from './listar-disponibilidad.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Finca } from 'src/app/feature/finca/shared/model/finca';

describe('ListarDisponibilidadComponent', () => {
  let component: ListarDisponibilidadComponent;
  let fixture: ComponentFixture<ListarDisponibilidadComponent>;
  const items: Finca[] = [new Finca('1', 'el paraiso', 'calle 123', '400000', '6'),
    new Finca('2', 'el refugio', 'calle 321', '500000', '8')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDisponibilidadComponent ],
      imports: [
              RouterTestingModule]
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
     expect(2).toBe(items.length);
  });
});
