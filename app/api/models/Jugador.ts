export class Jugador {
  constructor (
    public id: number,
    public nombre_completo: string,
    public pais_nac: string,
    public pj: number,
    public pg: number,
    public pe: number,
    public pp: number,
    public goles: number,
    public goles_recibidos: number,
    public asistencias: number
  ) {}
}
