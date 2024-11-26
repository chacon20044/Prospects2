'use client'

import React, { useState } from 'react'
import Header from '../HEADER.js'

export default function RegistroDeportivo() {
  const [activeTab, setActiveTab] = useState('jugador')
  const [jugador, setJugador] = useState({
    nombre: '', apellido: '', estatura: '', peso: '', edad: '', ciudad: '', posicion: '', equipo: '', estadoSalud: ''
  })
  const [equipo, setEquipo] = useState({
    nombre: '', presupuesto: '', entrenador: '', estadio: '', patrocinador: ''
  })
  const [entrenador, setEntrenador] = useState({
    nombre: '', apellido: '', edad: ''
  })

  const handleJugadorChange = (e) => {
    setJugador({ ...jugador, [e.target.name]: e.target.value })
  }

  const handleEquipoChange = (e) => {
    setEquipo({ ...equipo, [e.target.name]: e.target.value })
  }

  const handleEntrenadorChange = (e) => {
    setEntrenador({ ...entrenador, [e.target.name]: e.target.value })
  }

  const handleSubmit = (tipo) => (e) => {
    const handleSubmit = (tipo) => async (e) => {
      e.preventDefault();
    
      let data;
      let url;
    
      if (tipo === 'jugador') {
        data = jugador;
        url = '/api/register/jugador';
      } else if (tipo === 'equipo') {
        data = equipo;
        // Define el endpoint correspondiente para equipo
      } else if (tipo === 'entrenador') {
        data = entrenador;
        // Define el endpoint correspondiente para entrenador
      }
    
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (response.ok) {
          alert(`${tipo} registrado con éxito.`);
        } else {
          alert(`Error al registrar ${tipo}.`);
        }
      } catch (err) {
        console.error(`Error al enviar ${tipo}:`, err);
      }
    };
  }

  return (
    <>
      <Header />
      <div className="min-h-screen w-full relative overflow-hidden"
      style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp3589909.jpg")`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        minHeight: '100vh', 
        backgroundAttachment: 'fixed', 
        position: 'relative' }}>
      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-black-600">
        <main className="container mx-auto px-4 py-8 bg-white/50 min-h-screen rounded-lg shadow-lg mt-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Registration</h1>
          
          <div className="mb-4 flex justify-center">
            <button
              onClick={() => setActiveTab('jugador')}
              className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'jugador' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Player
            </button>
            <button
              onClick={() => setActiveTab('equipo')}
              className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'equipo' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Team
            </button>
            <button
              onClick={() => setActiveTab('entrenador')}
              className={`px-4 py-2 rounded-t-lg ${activeTab === 'entrenador' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Manager
            </button>
          </div>

          {activeTab === 'jugador' && (
            <form onSubmit={handleSubmit('jugador')} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={jugador.nombre}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={jugador.apellido}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="estatura" className="block text-sm font-medium text-gray-700">Height (cm)</label>
                  <input
                    type="number"
                    id="estatura"
                    name="estatura"
                    value={jugador.estatura}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="peso" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                  <input
                    type="number"
                    id="peso"
                    name="peso"
                    value={jugador.peso}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    id="edad"
                    name="edad"
                    value={jugador.edad}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    value={jugador.ciudad}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="posicion" className="block text-sm font-medium text-gray-700">Position</label>
                  <select
                    id="posicion"
                    name="posicion"
                    value={jugador.posicion}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option value="">Choose a position</option>
                    <option value="delantero">Forward</option>
                    <option value="centrocampista">Midfielder</option>
                    <option value="defensa">Defense</option>
                    <option value="portero">Goalkeeper</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="equipo" className="block text-sm font-medium text-gray-700">Team</label>
                  <input
                    type="text"
                    id="equipo"
                    name="equipo"
                    value={jugador.equipo}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="estadoSalud" className="block text-sm font-medium text-gray-700">Health status</label>
                  <select
                    id="estadoSalud"
                    name="estadoSalud"
                    value={jugador.estadoSalud}
                    onChange={handleJugadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option value="">Choose your health status</option>
                    <option value="optimo">Healthy</option>
                    <option value="lesionado">Injured</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register player
                </button>
              </div>
            </form>
          )}

          {activeTab === 'equipo' && (
            <form onSubmit={handleSubmit('equipo')} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombreEquipo" className="block text-sm font-medium text-gray-700">Team's name</label>
                  <input
                    type="text"
                    id="nombreEquipo"
                    name="nombre"
                    value={equipo.nombre}
                    onChange={handleEquipoChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700">Budget</label>
                  <input
                    type="number"
                    id="presupuesto"
                    name="presupuesto"
                    value={equipo.presupuesto}
                    onChange={handleEquipoChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="entrenadorEquipo" className="block text-sm font-medium text-gray-700">Manager</label>
                  <input
                    type="text"
                    id="entrenadorEquipo"
                    name="entrenador"
                    value={equipo.entrenador}
                    onChange={handleEquipoChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="estadio" className="block text-sm font-medium text-gray-700">Stadium's name</label>
                  <input
                    type="text"
                    id="estadio"
                    name="estadio"
                    value={equipo.estadio}
                    onChange={handleEquipoChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="patrocinador" className="block text-sm font-medium text-gray-700">Main sponsor</label>
                  <input
                    type="text"
                    id="patrocinador"
                    name="patrocinador"
                    value={equipo.patrocinador}
                    onChange={handleEquipoChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register Team
                </button>
              </div>
            </form>
          )}

          {activeTab === 'entrenador' && (
            <form onSubmit={handleSubmit('entrenador')} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombreEntrenador" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="nombreEntrenador"
                    name="nombre"
                    value={entrenador.nombre}
                    onChange={handleEntrenadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="apellidoEntrenador" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="apellidoEntrenador"
                    name="apellido"
                    value={entrenador.apellido}
                    onChange={handleEntrenadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="edadEntrenador" className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    id="edadEntrenador"
                    name="edad"
                    value={entrenador.edad}
                    onChange={handleEntrenadorChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register Manager
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
      </div>
    </>
  )
}