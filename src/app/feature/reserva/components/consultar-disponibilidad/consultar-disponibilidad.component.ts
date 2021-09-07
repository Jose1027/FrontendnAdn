import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Finca } from 'src/app/feature/finca/shared/model/Finca';
import { FincaService } from 'src/app/feature/finca/shared/service/finca.service';

@Component({
  selector: 'app-consultar-disponibilidad',
  templateUrl: './consultar-disponibilidad.component.html',
  styleUrls: ['./consultar-disponibilidad.component.css']
})
export class ConsultarDisponibilidadComponent implements OnInit {

  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  public fincas: Finca[] = [];

  constructor(protected fincaService: FincaService,
                  public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  consultarDisponibilidad(){
    this.fincaService.consultarDisponibilidad(this.datepipe.transform(this.fechaInicio, 'yyyy-MM-dd'),this.datepipe.transform(this.fechaFin, 'yyyy-MM-dd'))
    .subscribe(
      response => {
        this.fincas = response;
      }
    )
  }
}
