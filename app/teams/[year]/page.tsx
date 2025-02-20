"use client";

import { useEffect, useState } from 'react';

type Player = {
  id: number;
  nombre_completo: string;
};

const YearPage = ({ params }: { params: { year: string } }) => {
  const { year } = params;
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(`/api/jugadores?year=${year}`);
      const data = await response.json();
      setPlayers(data);
    };
    fetchPlayers();
  }, [year]);

  return (
    <div>
      <h1>Jugadores del torneo de {year}</h1>
      <ul>
        {Array.isArray(players) ? (
          players.map((player) => (
            <li key={player.id}>{player.nombre_completo}</li>
          ))
        ) : (
          <p>No hay jugadores disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default YearPage;
