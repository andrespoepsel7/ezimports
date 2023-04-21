import React from 'react'
import logo from '../../Assets/Element 31 NO BG.png'

export default function Informacion() {
  return (
    <>
      {/* Versión WEB */}    
      <div className='hidden md:flex w-[100%] h-[100%] px-[12%] flex-col items-center justify-center overflow-y-scroll'>
        
        {/* Parte 1 */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className='w-[100%] flex flex-row pt-[150px]'>
          <div className='w-[50%]'>
            <img src={logo} alt="logo"/> 
          </div>
          <div className='w-[50%] pl-[30px] pr-[80px] flex flex-col'>
            <p className='font-bold text-[80px] text-white'>
              EZImports
            </p>
            <p className='font-bold text-[80px] text-white'>
              Bolivia
            </p>
            <p className='font-sans text-[30px] font-thin text-white'>
              Importaciones rápidas, fáciles
              y eficientes...
            </p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className='w-[100%] flex flex-row'>
          <div className='w-[50%]'>
            <img src={logo} alt="logo"/> 
          </div>
          <div className='w-[50%] pl-[30px] pr-[80px] flex flex-col'>
            <p className='font-bold text-[80px] text-white'>
              EZImports
            </p>
            <p className='font-bold text-[80px] text-white'>
              Bolivia
            </p>
            <p className='font-sans text-[30px] font-thin text-white'>
              Importaciones rápidas, fáciles
              y eficientes...
            </p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className='w-[100%] flex flex-row'>
          <div className='w-[50%]'>
            <img src={logo} alt="logo"/> 
          </div>
          <div className='w-[50%] pl-[30px] pr-[80px] flex flex-col'>
            <p className='font-bold text-[80px] text-white'>
              EZImports
            </p>
            <p className='font-bold text-[80px] text-white'>
              Bolivia
            </p>
            <p className='font-sans text-[30px] font-thin text-white'>
              Importaciones rápidas, fáciles
              y eficientes...
            </p>
          </div>
        </div>
        
        
      </div>

      {/* Versión MÓVIL */}
      <div className='flex w-[100%] md:hidden'>
          Versión disponible solo en escritorio.
      </div>
        
    </>
  )
}

