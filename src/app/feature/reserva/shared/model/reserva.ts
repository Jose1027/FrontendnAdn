export class Reserva {
  idFinca ?: string;
  idUsuario ?: string;
  fechaInicioReserva ?: string;
  fechaFinReserva ?: string;
  valorTotalReserva ?: string;

      constructor(idFinca: string, idUsuario: string, fechaInicioReserva: string, fechaFinReserva: string, valorTotalReserva: string) {
          this.idFinca = idFinca;
          this.idUsuario = idUsuario;
          this.fechaInicioReserva = fechaInicioReserva;
          this.fechaFinReserva = fechaFinReserva;
          this.valorTotalReserva = valorTotalReserva;
      }
}
