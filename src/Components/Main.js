import React from 'react'
// Navigation
import { Outlet } from 'react-router-dom'
// Header
import Header from './Reutilizables/Header'
// Footer
import Footer from './Reutilizables/Footer'

export default function Main() {
    
  return (
    <div className='flex w-full min-h-screen font-f1'>
        {/* Versión WEB */}    
        <div className='hidden md:flex flex-col w-full min-h-screen items-center'>
            {/* Navbar */}
            <div className='z-10'>
                <Header/>
            </div>
            {/* Contenido */}
            <div className="z-0 w-[100%] pt-[100px]">
                <Outlet/>
                <Footer/>
            </div>          
        </div>
        {/* Versión MÓVIL */}
        <div className='flex flex-col mx-0 md:hidden'>
            Versión disponible solo en escritorio.
        </div>
        
    </div>
  )
}
