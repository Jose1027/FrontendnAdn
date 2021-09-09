import { AppPage } from "../app.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { FincaPage } from "../page/finca/finca.po";
//import { browser } from 'protractor';

describe('workspace-project Finca', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let finca: FincaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    finca = new FincaPage();
  });

  it('A Listar fincas', () => {
    page.navigateTo();
    navBar.clickBotonFinca();

    expect(1).toBe(finca.contarFincas());
  });

  it('B Crear finca', () => {
    const nombre = "Finca 1";
    const direccion = "calle 12 34-5";
    const precioPorDia = "300000";
    const cantidadHabitaciones = "3";

    page.navigateTo();
    navBar.clickBotonFinca();
    finca.clickLinkCrearFincas();
    finca.ingresarNombreCrearFinca(nombre);
    finca.ingresarDireccionCrearFinca(direccion);
    finca.ingresarPrecioPorDiaCrearFinca(precioPorDia);
    finca.ingresarCantidadHabitacionesCrearFinca(cantidadHabitaciones);
    finca.clickLinkAceptarCrearFinca();
    page.navigateTo();
    navBar.clickBotonFinca();

    expect(2).toBe(finca.contarFincas());
  });
});
