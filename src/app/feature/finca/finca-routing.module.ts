import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FincaComponent } from './components/finca/finca.component';
import { CrearFincaComponent } from './components/crear-finca/crear-finca.component';
import { ListarFincaComponent } from './components/listar-finca/listar-finca.component';

const routes: Routes = [
  {
    path: '',
    component: FincaComponent,
    children: [
      {
        path: '',
        component: FincaComponent
      },
      {
        path: 'listar',
        component: ListarFincaComponent
      },
      {
        path: 'crear',
        component: CrearFincaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FincaRoutingModule { }
