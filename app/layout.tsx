// app/layout.tsx
"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import IconBar from './components/Iconbar';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Asegúrate de que Bootstrap JS también se cargue.
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>
        <IconBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
