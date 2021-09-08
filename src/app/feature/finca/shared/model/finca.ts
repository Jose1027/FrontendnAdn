export class Finca {
    idFinca ?: string;
    nombre ?: string;
    direccion ?: string;
    precioPorDia ?: string;
    cantidadHabitaciones ?: string;

    constructor(idFinca: string, nombre: string, direccion: string, precioPorDia: string, cantidadHabitaciones: string) {
              this.idFinca = idFinca;
              this.nombre = nombre;
              this.direccion = direccion;
              this.precioPorDia = precioPorDia;
              this.cantidadHabitaciones = cantidadHabitaciones;
          }
}
