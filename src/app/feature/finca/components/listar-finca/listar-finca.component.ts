import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FincaService } from 'src/app/feature/finca/shared/service/finca.service';
import { Finca } from 'src/app/feature/finca/shared/model/finca';

@Component({
  selector: 'app-listar-finca',
  templateUrl: './listar-finca.component.html',
  styleUrls: ['./listar-finca.component.css']
})
export class ListarFincaComponent implements OnInit {

  public listaFincas: Observable<Finca[]>;

  constructor(protected fincaService:  FincaService) { }

  ngOnInit(): void {
    this.listaFincas = this.fincaService.consultar();
  }

}
