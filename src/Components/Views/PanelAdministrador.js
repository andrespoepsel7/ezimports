import React from 'react'
// Navigation
import { useNavigate } from 'react-router-dom'

export default function PanelAdministrador() {
    // Navigation
    const navigate = useNavigate()
  return (
    <div className='flex w-full min-h-screen items-center justify-center'>
        {/* Versión WEB */}    
        <div className='hidden sm:flex flex-col w-[100%] mb-auto pb-[100px] px-[12%]'>
          <div className='flex flex-col w-full'>
            <p 
              className='text-c1 underline cursor-pointer'
              onClick={()=> navigate('/nuevo_usuario')}
            >
              Crear nuevo Usuario
            </p>
          </div>
        </div>
        {/* Versión MÓVIL */}
        <div className='flex flex-col mx-0 sm:hidden'>
            Versión disponible solo en escritorio.
        </div>
    </div>
  )
}
