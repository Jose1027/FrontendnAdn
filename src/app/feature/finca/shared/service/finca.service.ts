import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Finca } from '../model/finca';

@Injectable()
export class FincaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Finca[]>(`${environment.endpoint}/fincas`, this.http.optsName('consultar fincas'));
  }

  public crear(finca: Finca){
    return this.http.doPost<Finca, boolean>(`${environment.endpoint}/fincas`, finca, this.http.optsName('crear finca'));
  }

    public consultarDisponibilidad(fechaInicio: string,fechaFin: string) {
      console.log(`${environment.endpoint}/fincas/${fechaInicio}/${fechaFin}`)
      return this.http.doGet<Finca[]>(`${environment.endpoint}/fincas/${fechaInicio}/${fechaFin}`);
    }

}
