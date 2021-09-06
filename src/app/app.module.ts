import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { FincaComponent } from './feature/finca/finca.component';
import { ReservaComponent } from './feature/reserva/reserva.component';
import { RvrearReservaComponent } from './feature/reserva/components/rvrear-reserva/rvrear-reserva.component';
import { CrearReservaComponent } from './feature/reserva/components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './feature/reserva/components/listar-reserva/listar-reserva.component';
import { CrearFincaComponent } from './feature/finca/components/crear-finca/crear-finca.component';
import { ListarFincaComponent } from './feature/finca/components/listar-finca/listar-finca.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FincaComponent,
    ReservaComponent,
    RvrearReservaComponent,
    CrearReservaComponent,
    ListarReservaComponent,
    CrearFincaComponent,
    ListarFincaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
