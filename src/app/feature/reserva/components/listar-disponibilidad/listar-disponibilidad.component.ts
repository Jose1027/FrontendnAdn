import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Finca } from 'src/app/feature/finca/shared/model/finca';

@Component({
  selector: 'app-listar-disponibilidad',
  templateUrl: './listar-disponibilidad.component.html',
  styleUrls: ['./listar-disponibilidad.component.css']
})
export class ListarDisponibilidadComponent implements OnInit {

  @Input()
  public items: Finca[];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    realizarReserva(id: number){
      this.route.navigate(['reserva', 'crear', id]);
    }

}
