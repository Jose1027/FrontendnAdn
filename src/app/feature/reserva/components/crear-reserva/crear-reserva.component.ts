import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/feature/reserva/shared/model/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from 'src/app/feature/reserva/shared/service/reserva.service';
import alert from 'sweetalert2';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

 public reserva: Reserva = new Reserva();

  constructor(protected reservaService:  ReservaService, protected router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.cargarReserva();

  }

  public crear(): void{
  this.reservaService.crear(this.reserva).subscribe(
        a => {
          this.router.navigate(['/reserva/listar']),
          alert.fire('Reserva creada', `Reserva creada con éxito`, 'success')
        }
      )
      }

  cargarReserva(){
    this.activatedRoute.params.subscribe(
      params => {
        let idFinca = params['id'];
        this.reserva.idFinca=idFinca;
        }
    )
  }
}
