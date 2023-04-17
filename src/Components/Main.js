import React from 'react'
// Navigation
import { Outlet } from 'react-router-dom'
// Header
import Header from './Reutilizables/Header'

export default function Main() {
    
  return (
    <div className='flex w-full min-h-screen bg-gradient-to-r from-violet-950 to-amber-400'>
        {/* Versión WEB */}    
        <div className='hidden md:flex flex-col w-full min-h-screen items-center'>
            {/* Navbar */}
            <div className='z-10'>
                <Header/>
            </div>
            {/* Contenido */}
            <div className='z-0 h-[100%] w-[80%] pt-[100px] bg-white'>
                <Outlet/>
            </div>
        </div>
        {/* Versión MÓVIL */}
        <div className='flex flex-col mx-0 md:hidden'>
            Versión disponible solo en escritorio.
        </div>
        
    </div>
  )
}
