import React from 'react'
// Íconos
import {AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill, RiFacebookCircleFill} from 'react-icons/ri'


export default function Footer() {
  return (
    <>
        {/* Versión WEB */}    
        <div className='hidden md:flex w-[100%]'>
            <div className='w-[100%] h-[100%] px-[20%] py-[5%] flex flex-row justify-between bg-c1 text-white border-t-2 border-white'>
                {/* Parte 1 */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className='flex flex-col items-start justify-start'>
                    <div className='flex flex-col'>
                        <p className='font-bold font-mono text-[50px]'>CONTÁCTANOS</p>
                        <p className='font-thin font-sans text-[18px]'>No dudes en contactarnos y obtener tu servicio!</p>
                    </div>
                    <div className='flex flex-col mt-[100px]'>
                        <p>Achhumani C. Miguel Quenallata #80   La Paz, Bolivia</p>
                        <p className='font-thin font-sans mt-3'>ezimportsbo@gmail.com</p>
                        <p className='font-thin font-sans'>+(591) 77708379</p>
                    </div>

                </div>

                {/* Parte 2 */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='flex flex-col text-end mt-5'>
                    <div className='flex flex-row items-center'>
                        <p className='font-sans font-thin text-[20px] mr-3'>Pide tu cotización</p>
                        <button className='pt-3 pb-2 px-4 bg-c2 rounded-xl hover:scale-105'>
                            Cotizar
                        </button>
                    </div>
                    <div className='flex flex-col items-start justify-start mt-[50px]'>
                        <p className='text-[30px] ml-auto'>Redes sociales</p>
                        <div className='flex flex-col items-start justify-start mt-2 ml-auto'>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=100086171535388&mibextid=LQQJ4d" target='blank' className='flex flex-row items-center justify-center text-white hover:text-c2'>
                                <RiFacebookCircleFill className='w-[35px] h-[35px] mr-3'/>
                                <p>Facebook</p>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com/ezimportsbo?igshid=YmMyMTA2M2Y=" target='blank' className='flex flex-row items-center justify-center text-white hover:text-c2'>
                                <AiFillInstagram className='w-[35px] h-[35px] mr-3'/>
                                <p>Instagram</p>
                            </a>
                            {/* Whatsapp */}
                            <a href="https://wa.link/uhz4ty" target='blank' className='flex flex-row items-center justify-center text-white hover:text-c2'>
                                <RiWhatsappFill className='w-[35px] h-[35px] mr-3'/>
                                <p>Whatsapp</p>
                            </a>
                        </div>
                        <p className='font-thin font-sans underline hover:text-c2 mt-10 ml-auto cursor-pointer'>Ayuda e información</p>
                    </div>
                    

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
