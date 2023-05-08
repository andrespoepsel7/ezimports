import React from 'react'
// Íconos
import {AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill, RiFacebookCircleFill} from 'react-icons/ri'


export default function Footer() {
  return (
    <>
        {/* Versión WEB */}    
        <div className='hidden md:flex flex-col w-[100%]'>
            <div className='w-[100%] h-[100%] px-[10%] py-[5%] flex flex-row justify-between bg-c1 text-white border-t-2 border-white'>
                {/* Parte 1 */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className='flex flex-col items-start justify-start'>
                    <div className='flex flex-col'>
                        <p className='font-bold font-mono text-[50px]'>CONTÁCTANOS</p>
                        <p className='font-thin font-sans text-[18px]'>No dudes en contactarnos y obtener nuestro servicio!</p>
                    </div>
                    <div className='w-full my-4'>
                        <button className='w-full rounded-2xl bg-c2 hover:scale-105'>
                            <p className='font-sans font-semibold py-2'>Contactar ya!</p>
                        </button>
                    </div>
                    <div className='flex flex-col mt-auto'>
                        <p>Achhumani C. Miguel Quenallata #80   La Paz, Bolivia</p>
                        <p className='font-thin font-sans mt-3'>ezimportsbo@gmail.com</p>
                        <p className='font-thin font-sans'>+(591) 77708379</p>
                    </div>

                </div>

                {/* Parte 2 */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className='flex flex-col items-start justify-start mt-3'>
                    <p className='font-bold font-mono text-[30px]'>Nosotros</p>
                    <div className='flex flex-col mt-5'>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>sobre ezimports</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>preguntas frecuentes</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>empresas amigas</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>información legal</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>catálogo</p>
                    </div>

                </div>

                {/* Parte 3 */}
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
            <div className='py-4 px-[10%] bg-c1'>
                <div className='flex flex-row items-center justify-center text-white border-t-2 border-white pt-4'>
                    <p className='font-sans font-thin text-[15px]'> EZImports Bolivia ® 2023</p>
                    <p className='font-sans font-thin text-[15px] ml-10'>Sitio desarrollado por Andrés Poepsel Vásquez</p>
                </div>
                
            </div>
        </div>
        {/* Versión MÓVIL */}
        <div className='flex flex-col w-full md:hidden'>
            <div className='w-full px-5 py-5 flex flex-col items-center justify-center bg-c1 text-white border-t-2 border-white'>
                {/* Parte 1 */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className='flex flex-col w-full items-start justify-start'>
                    <div className='flex flex-col'>
                        <p className='text-[40px]'>CONTÁCTANOS</p>
                        <p className='font-thin font-sans text-[18px]'>No dudes en contactarnos y obtener nuestro servicio!</p>
                    </div>
                    <div className='w-full my-4'>
                        <button className='w-full rounded-2xl bg-c2 hover:scale-105'>
                            <p className='font-sans font-semibold py-2'>Contactar ya!</p>
                        </button>
                    </div>
                </div>

                {/* Parte 2 */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className='flex flex-col w-full items-start justify-start mt-5'>
                    <p className='text-[40px]'>sobre Nosotros</p>
                    <div className='flex flex-col mt-3'>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>sobre ezimports</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>preguntas frecuentes</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>empresas amigas</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>información legal</p>
                        <p className='font-bold text-[18px] underline cursor-pointer hover:text-c2'>catálogo</p>
                    </div>
                </div>

                {/* Parte 3 */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='flex flex-col text-end mt-5'>
                    <div className='flex flex-row items-center'>
                        <p className='font-sans font-thin text-[20px] mr-3'>Pide tu cotización</p>
                        <button className='pt-3 pb-2 px-4 bg-c2 rounded-xl hover:scale-105'>
                            Cotizar
                        </button>
                    </div>
                </div>

                {/* Parte 4 */}
                <div className='flex flex-col mt-8'>
                    <p>Achhumani C. Miguel Quenallata #80   La Paz, Bolivia</p>
                    <p className='font-thin font-sans mt-3'>ezimportsbo@gmail.com</p>
                    <p className='font-thin font-sans'>+(591) 77708379</p>
                </div>

                {/* Parte 5 */}
                <div className='mt-12 px-[20%] w-full'>
                    <div className='flex flex-row w-full items-center justify-between'>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/profile.php?id=100086171535388&mibextid=LQQJ4d" target='blank' className='flex flex-row items-center justify-center text-white hover:text-c2'>
                            <RiFacebookCircleFill className='w-[35px] h-[35px]'/>
                        </a>
                        {/* Instagram */}
                        <a href="https://instagram.com/ezimportsbo?igshid=YmMyMTA2M2Y=" target='blank' className='flex flex-row items-center justify-center text-white hover:text-c2'>
                            <AiFillInstagram className='w-[35px] h-[35px]'/>
                        </a>
                        {/* Whatsapp */}
                        <a href="https://wa.link/uhz4ty" target='blank' className='flex flex-row items-center justify-center text-white hover:text-c2'>
                            <RiWhatsappFill className='w-[35px] h-[35px]'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full pb-4 px-[10%] bg-c1'>
                <div className='flex flex-row items-center justify-between text-white border-t-2 border-white pt-4'>
                    <p className='font-sans font-thin text-[15px] text-left'> EZImports Bolivia ® 2023</p>
                    <p className='font-sans font-thin text-[15px] ml-10 text-right'>Sitio desarrollado por Andrés Poepsel Vásquez</p>
                </div>
            </div>
        </div>
    </>
  )
}
