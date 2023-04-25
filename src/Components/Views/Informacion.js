import React from 'react'
import logo from '../../Assets/Element 31 NO BG.png'

export default function Informacion() {
  return (
    <>
      {/* Versión WEB */}    
      <div className='hidden md:flex w-[100%] min-h-screen items-center justify-center'>
        {/* Partes */}
        <div className='hidden sm:flex flex-col w-[100%] mb-auto pb-[100px] px-[12%]'>
          <p className='text-c1'>Informaciónes generales</p>
        </div>
      </div>

      {/* Versión MÓVIL */}
      <div className='flex w-[100%] md:hidden'>
          Versión disponible solo en escritorio.
      </div>
        
    </>
  )
}

