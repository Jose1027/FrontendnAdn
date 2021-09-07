import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FincaRoutingModule } from './finca-routing.module';
import { FincaService } from './shared/service/finca.service';
import { FincaComponent } from './components/finca/finca.component';
import { CrearFincaComponent } from './components/crear-finca/crear-finca.component';
import { ListarFincaComponent } from './components/listar-finca/listar-finca.component';

@NgModule({
  declarations: [
    FincaComponent,
    CrearFincaComponent,
    ListarFincaComponent
  ],
  imports: [
    FincaRoutingModule,
    SharedModule
  ],
  providers: [FincaService]
})
export class FincaModule { }
