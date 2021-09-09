import { by, element } from 'protractor';

export class FincaPage {

  private linkCrearFincas = element(by.id('linkCrearFinca'));
  private listarFincas = element.all(by.css('.fincas')).all(by.css('.itemFinca'));

  private inputNombreCrearFinca = element(by.id('nombreCrearFinca'));
  private inputDireccionCrearFinca = element(by.id('direccionCrearFinca'));
  private inputPrecioPorDiaCrearFinca = element(by.id('precioPorDiaCrearFinca'));
  private inputCantidadHabitacionesCrearFinca = element(by.id('cantidadHabitaciones'));
  private linkAceptarCrearFinca = element(by.id('linkAceptarCrearFinca'));

  async clickLinkCrearFincas(){
    await this.linkCrearFincas.click();
  }

  async ingresarNombreCrearFinca(nombre){
    await this.inputNombreCrearFinca.sendKeys(nombre);
  }

  async ingresarDireccionCrearFinca(direccion){
    await this.inputDireccionCrearFinca.sendKeys(direccion);
  }

  async ingresarPrecioPorDiaCrearFinca(precioPorDia){
    await this.inputPrecioPorDiaCrearFinca.sendKeys(precioPorDia);
  }

    async ingresarCantidadHabitacionesCrearFinca(cantidadHabitaciones){
      await this.inputCantidadHabitacionesCrearFinca.sendKeys(cantidadHabitaciones);
    }

  async clickLinkAceptarCrearFinca(){
    await this.linkAceptarCrearFinca.click();
  }





  async contarFincas(){
    return await this.listarFincas.count();
  }

  async validarFincaNombre(id: string){
    const itemFincaNombre = element(by.id('itemFincaNombre' + id));
    return await itemFincaNombre.getText();
  }

  async validarFincaDireccion(id: string){
    const itemFincaDireccion = element(by.id('itemFincaDireccion' + id));
    return await itemFincaDireccion.getText();
  }

  async validarFincaPrecioPorDia(id: string){
    const itemFincaPrecioPorDia = element(by.id('itemFincaPrecioPorDia' + id));
    return await itemFincaPrecioPorDia.getText();
  }

  async validarFincaCantidadHabitaciones(id: string){
    const itemFincaCantidadHabitaciones = element(by.id('itemFincaCantidadHabitaciones' + id));
    return await itemFincaCantidadHabitaciones.getText();
  }

}
