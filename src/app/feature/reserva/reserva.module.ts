import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaService } from './shared/service/reserva.service';
import { ReservaComponent } from './components/reserva/reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ConsultarDisponibilidadComponent } from './components/consultar-disponibilidad/consultar-disponibilidad.component';
import { ListarDisponibilidadComponent } from './components/listar-disponibilidad/listar-disponibilidad.component';

@NgModule({
  declarations: [
    ReservaComponent,
    CrearReservaComponent,
    ListarReservaComponent,
    ConsultarDisponibilidadComponent,
    ListarDisponibilidadComponent
  ],
  imports: [
  CommonModule,
    ReservaRoutingModule,
    SharedModule
  ],
  providers: [DatePipe, ReservaService]
})
export class ReservaModule { }
