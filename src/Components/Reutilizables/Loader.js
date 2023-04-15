import React from 'react'
import logo from '../../Assets/Element 30 NO BG.png'

export default function Loader() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <img src={logo} alt="logo" className='w-[150px] animate-bounce' />
        <p className='text-[30px] font-bold text-white'>Cargando...</p>
    </div>
  )
}
