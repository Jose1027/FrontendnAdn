import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFincaComponent } from './listar-finca.component';

describe('ListarFincaComponent', () => {
  let component: ListarFincaComponent;
  let fixture: ComponentFixture<ListarFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
