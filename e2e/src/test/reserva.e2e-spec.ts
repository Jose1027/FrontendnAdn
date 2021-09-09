import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { ReservaPage } from '../page/reserva/reserva.po';

describe('workspace-project Reserva', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let reserva: ReservaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    reserva = new ReservaPage();
  });

  it('A Listar reservas', () => {
    page.navigateTo();
    navBar.clickBotonReserva();
    browser.sleep(5000);
    expect(1).toBe(reserva.contarReservas());
  });

  it('Listar fincas disponibles', () => {
      const fechaInicio = '09-21-2021';
      const fechaFin = '09-22-2021';
      page.navigateTo();
      navBar.clickBotonReserva();
      reserva.clickConsultarDisponibilidades();
      reserva.ingresarFechaInicioDisponibilidad(fechaInicio);
      reserva.ingresarFechaFinDisponibilidad(fechaFin);
      browser.sleep(5000);
      reserva.clickConsultarListarDisponibilidades();
      browser.sleep(5000);
      expect(2).toBe(reserva.contarDisponibilidad());
  });

  it('Deberia Crear reserva', () => {
      const fechaInicio = '09-21-2021';
      const fechaFin = '09-22-2021';
      const id = '1';
      const idUsuario = '1088302416';
      page.navigateTo();
      navBar.clickBotonReserva();
      reserva.clickConsultarDisponibilidades();
      reserva.ingresarFechaInicioDisponibilidad(fechaInicio);
      reserva.ingresarFechaFinDisponibilidad(fechaFin);
      browser.sleep(5000);
      reserva.clickConsultarListarDisponibilidades();
      browser.sleep(5000);
      reserva.clickLinkReservar(id);
      reserva.ingresarFechaInicioReserva(fechaInicio);
      reserva.ingresarFechaFinReserva(fechaFin);
      reserva.ingresarIdUsuario(idUsuario);
      reserva.clickLinkAceptarCrearReserva();

      page.navigateTo();
      navBar.clickBotonReserva();
      browser.sleep(5000);
      expect(2).toBe(reserva.contarReservas());


  });
});
