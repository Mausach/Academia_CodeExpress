import React from 'react'
import { useLocation } from 'react-router-dom';
import { NavBar } from '../../ComponentesGenerales/NavBar';

export const Home_Alu_Profe = () => {
    const location = useLocation();
	const usuario = location.state;//recibe el onjeto desde el login
  return (
    <div>
        <NavBar usuario={usuario}/>
        <h1>Cartas de sus cursos o carreras o comisiones</h1>

    </div>
  )
}
