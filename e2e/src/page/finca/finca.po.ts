import { by, element } from 'protractor';

export class FincaPage {

  //html listar fincas
  private linkCrearFincas = element(by.id('linkCrearFinca'));
  private listarFincas = element.all(by.css('.fincas')).all(by.css('.itemFinca'));

  //html crear finca
  private inputNombreCrearFinca = element(by.id('nombreCrearFinca'));
  private inputDireccionCrearFinca = element(by.id('direccionCrearFinca'));
  private inputPrecioPorDiaCrearFinca = element(by.id('precioPorDiaCrearFinca'));
  private inputCantidadHabitacionesCrearFinca = element(by.id('cantidadHabitaciones'));
  private linkAceptarCrearFinca = element(by.id('linkAceptarCrearFinca'));

  //funciones html listar fincas
  async clickLinkCrearFincas(){
    await this.linkCrearFincas.click();
  }

  //funciones html crear fincas
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





  //validaciones
  async contarFincas(){
    return await this.listarFincas.count();
  }

  async validarFincaNombre(id:string){
    let itemFincaNombre = element(by.id('itemFincaNombre'+id));
    return await itemFincaNombre.getText();
  }

  async validarFincaDireccion(id:string){
    let itemFincaDireccion = element(by.id('itemFincaDireccion'+id));
    return await itemFincaDireccion.getText();
  }

  async validarFincaPrecioPorDia(id:string){
    let itemFincaPrecioPorDia = element(by.id('itemFincaPrecioPorDia'+id));
    return await itemFincaPrecioPorDia.getText();
  }

  async validarFincaCantidadHabitaciones(id:string){
    let itemFincaCantidadHabitaciones = element(by.id('itemFincaCantidadHabitaciones'+id));
    return await itemFincaCantidadHabitaciones.getText();
  }

}
