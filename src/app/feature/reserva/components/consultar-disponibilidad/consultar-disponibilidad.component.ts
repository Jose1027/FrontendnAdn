//import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Finca } from 'src/app/feature/finca/shared/model/finca';
import { FincaService } from 'src/app/feature/finca/shared/service/finca.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-disponibilidad',
  templateUrl: './consultar-disponibilidad.component.html',
  styleUrls: ['./consultar-disponibilidad.component.css']
})
export class ConsultarDisponibilidadComponent implements OnInit {

  fechaInicio: string;
  fechaFin: string;
  public listaFincas: Finca[];

  constructor(protected fincaService: FincaService) { }

  ngOnInit(): void {
  }

  consultarDisponibilidad(){
    this.fincaService
    .consultarDisponibilidad(this.fechaInicio, this.fechaFin)
    .subscribe(response => {
        this.listaFincas = response;
      }
    );
  }
}
