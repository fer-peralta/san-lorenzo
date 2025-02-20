import { db } from '../config/db'
import { Jugador } from '../models/Jugador'

export class JugadorRepository {
  async obtenerJugadoresPorAnio (anio: number): Promise<Jugador[]> {
    const jugadoresData = await db('jugadores as j')
      .select(
        'j.id',
        db.raw(`CONCAT(p.nombres, ' ', p.apellidos) as nombre_completo`),
        'p.pais_nac',
        'pj.pj',
        'pj.pg',
        'pj.pe',
        'pj.pp',
        'pj.goles',
        'pj.goles_recibidos',
        'pj.asistencias'
      )
      .join('personas as p', 'j.id_persona', '=', 'p.id')
      .join('planteles-jugadores as pj', 'pj.id_jugador', '=', 'j.id')
      .join('torneos as t', 't.id', '=', 'pj.id_torneo')
      .whereRaw('YEAR(t.anio_inicio) = ?', [anio])

    return jugadoresData.map(
      data =>
        new Jugador(
          data.id,
          data.nombre_completo,
          data.pais_nac,
          data.pj,
          data.pg,
          data.pe,
          data.pp,
          data.goles,
          data.goles_recibidos,
          data.asistencias
        )
    )
  }
}
