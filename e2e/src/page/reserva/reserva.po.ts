import { by, element } from 'protractor';

export class ReservaPage {

  private linkCrearReservas = element(by.id('linkAceptarCrearReserva'));
  private linkConsultarDisponibilidad = element(by.id('linkConsultarDisponibilidad'));
  private listarReservas = element.all(by.css('.reservas')).all(by.css('.itemReserva'));
  private listarFincasDisponibles = element.all(by.css('.disponibilidades')).all(by.css('.itemDisponibilidad'));
  private inputFechaInicioDisponibilidad = element(by.id('fechaInicio'));
  private inputFechaFinDisponibilidad = element(by.id('fechaFin'));
  private linkConsultarListarDisponibilidad = element(by.id('linkConsultarListarDisponibilidad'));
  private inputFechaInicioReserva = element(by.id('fechaInicioReserva'));
  private inputFechaFinReserva = element(by.id('fechaFinReserva'));
  private inputIdUsuario = element(by.id('idUsuario'));


  async clickLinkCrearReservas(){
    await this.linkCrearReservas.click();
  }

  async clickConsultarDisponibilidades(){
    await this.linkConsultarDisponibilidad.click();
  }

  async clickConsultarListarDisponibilidades(){
    await this.linkConsultarListarDisponibilidad.click();
  }

  async ingresarFechaInicioDisponibilidad(fechaInicioDisponibilidad){
    await this.inputFechaInicioDisponibilidad.sendKeys(fechaInicioDisponibilidad);
  }

  async ingresarFechaFinDisponibilidad(fechaFinDisponibilidad){
    await this.inputFechaFinDisponibilidad.sendKeys(fechaFinDisponibilidad);
  }

  async ingresarFechaInicioReserva(fechaInicioReserva){
    await this.inputFechaInicioReserva.sendKeys(fechaInicioReserva);
  }

  async ingresarFechaFinReserva(fechaFinReserva){
    await this.inputFechaFinReserva.sendKeys(fechaFinReserva);
  }

  async ingresarIdUsuario(idUsuario){
    await this.inputIdUsuario.sendKeys(idUsuario);
  }

  async clickLinkReservar(id: string){
    await (element(by.id('linkReservar' + id))).click();
  }

  async clickLinkAceptarCrearReserva(){
    await this.linkCrearReservas.click();
  }

  async contarReservas(){
    return await this.listarReservas.count();
  }

  async contarDisponibilidad(){
    return await this.listarFincasDisponibles.count();
  }


}

