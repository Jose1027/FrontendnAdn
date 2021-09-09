import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FincaService } from './finca.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Finca } from '../model/finca';
import { HttpResponse } from '@angular/common/http';

describe('FincaService', () => {
  let httpMock: HttpTestingController;
  let service: FincaService;
  // const apiEndpointFincaConsultaDisponibilidad = `${environment.endpoint}/fincas/`;
  const apiEndpointFincas = `${environment.endpoint}/fincas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FincaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(FincaService);
  });

  it('should be created', () => {
    const productService: FincaService = TestBed.inject(FincaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar fincas', () => {
    const dummyFincas = [
      new Finca('1', 'el paraiso', 'calle 123', '400000', '6'), new Finca('2', 'el refugio', 'calle 321', '500000', '8')
    ];
    service.consultar().subscribe(fincas => {
      expect(fincas.length).toBe(2);
      expect(fincas).toEqual(dummyFincas);
    });
    const req = httpMock.expectOne(apiEndpointFincas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyFincas);
  });

/*   it('deberia listar fincas disponibles', () => {
    const dummyFincas = [
      new Finca('1', 'el paraiso', 'calle 123', '400000', '6'), new Finca('2', 'el refugio', 'calle 321', '500000', '8')
    ];
    service.consultarDisponibilidad('2021-09-20', '2021-09-23').subscribe(fincas => {
      expect(fincas.length).toBe(2);
      expect(fincas).toEqual(dummyFincas);
      });
    const req = httpMock.expectOne(apiEndpointFincaConsultaDisponibilidad);
    expect(req.request.method).toBe('GET');
    req.flush(dummyFincas);
    }); */

  it('deberia crear una finca', () => {
    const dummyFinca = new Finca('1', '1088302416', '2021-09-15', '2021-09-17', '1080000');
    service.crear(dummyFinca).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointFincas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
