// app/api/jugadores/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { JugadorService } from '../services/JugadorService'
import { JugadorRepository } from '../repositories/JugadorRepository'

// Instancia del servicio y repositorio
const jugadorService = new JugadorService(new JugadorRepository())

export async function GET (req: NextRequest) {
  // Obtener el parámetro de la URL
  const { searchParams } = new URL(req.url)
  const anio = searchParams.get('year')

  if (!anio) {
    return NextResponse.json(
      { message: 'El parámetro "year" es obligatorio.' },
      { status: 400 }
    )
  }

  const anioNumber = parseInt(anio, 10)

  if (isNaN(anioNumber)) {
    return NextResponse.json(
      { message: 'El parámetro "year" debe ser un número válido.' },
      { status: 400 }
    )
  }

  try {
    // Llamar al servicio para obtener los jugadores por año
    const jugadores = await jugadorService.obtenerJugadoresPorAnio(anioNumber)
    return NextResponse.json(jugadores)
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error desconocido' },
      { status: 500 }
    )
  }
}
