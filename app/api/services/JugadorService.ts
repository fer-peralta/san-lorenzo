import { JugadorRepository } from '../repositories/JugadorRepository'
import { Jugador } from '../models/Jugador'

export class JugadorService {
  private jugadorRepository: JugadorRepository

  constructor (jugadorRepository: JugadorRepository) {
    this.jugadorRepository = jugadorRepository
  }

  async obtenerJugadoresPorAnio (anio: number): Promise<Jugador[]> {
    return await this.jugadorRepository.obtenerJugadoresPorAnio(anio)
  }
}
