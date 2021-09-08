import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`, this.http.optsName('consultar reservas'));
  }

  public crear(reserva: Reserva){
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas`, reserva, this.http.optsName('crear reserva'));
  }

}
