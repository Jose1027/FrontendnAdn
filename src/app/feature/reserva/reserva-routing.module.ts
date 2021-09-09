import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ConsultarDisponibilidadComponent } from './components/consultar-disponibilidad/consultar-disponibilidad.component';

const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
    children: [
      {
        path: '',
        component: ReservaComponent
      },
      {
        path: 'listar',
        component: ListarReservaComponent
      },
      {
        path: 'crear/:id/:fechaInicio/:fechaFin',
        component: CrearReservaComponent
      },
      {
        path: 'disponibilidad',
        component: ConsultarDisponibilidadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
