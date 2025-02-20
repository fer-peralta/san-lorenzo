"use client"
import { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

// Genera la estructura de décadas y años automáticamente
const generateDecades = (startYear: number, endYear: number) => {
  const decades = [];
  for (let year = startYear; year <= endYear; year += 10) {
    const years = Array.from({ length: 10 }, (_, i) => year + i);
    decades.push({ year, years });
  }
  return decades;
};

// Décadas de ejemplo
const decades = generateDecades(1900, 2020);

const TeamsNavBar = () => {
  const [activeDecade, setActiveDecade] = useState<number | null>(null);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav d-flex justify-content-center w-100">
          {decades.map((decade) => (
            <li
              key={decade.year}
              className={`nav-item dropdown ${activeDecade === decade.year ? 'show' : ''}`}
              style={{ position: 'relative' }}
            >
              <a
                className="nav-link dropdown-toggle "
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveDecade(activeDecade === decade.year ? null : decade.year);
                }}
              >
                {decade.year}s
              </a>
              <div
                className={`dropdown-menu ${activeDecade === decade.year ? 'show' : ''}`}
                style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
              >
                {decade.years.map((year) => (
                  <Link
                    key={year}
                    href={`/teams/${year}`}
                    className="dropdown-item"
                    onClick={() => setActiveDecade(null)}
                  >
                    {year}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TeamsNavBar;
