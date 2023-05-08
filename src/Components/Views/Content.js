import React from 'react'
// Imagenes
import portada from '../../Assets/Portada.jpeg'
import portada2 from '../../Assets/Portada 2.jpeg'
import logo from '../../Assets/Element 30 NO BG.png'

// Iconos
import {BiBookContent} from 'react-icons/bi'
import {GiTakeMyMoney} from 'react-icons/gi'
import {TbPackageImport} from 'react-icons/tb'


export default function Content() {

  return (
    <>
      {/* Versión WEB */}    
      <div className='hidden md:flex w-[100%]'>
        <div className='w-[100%] px-[12%]'>
          {/* Parte 1 */}
          <div data-aos="fade-right" data-aos-anchor-placement="top-center" className='w-[100%] min-h-screen pb-[100px] flex items-center justify-center'>
            <div className='w-[50%]'>
              <img src={logo} alt="logo"/> 
            </div>
            <div className='w-[50%] pl-[30px] pr-[80px] flex flex-col'>
              <p className='font-bold text-[80px] text-c1'>
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

          {/* Parte 2 */}
          <div className='w-[100%] py-[10%] flex items-center justify-center'>
            <div className='w-[50%] px-[5%]' data-aos="fade-right" data-aos-anchor-placement="top-bottom">
              <div className='flex flex-row'>
                <p className='font-bold text-[70px] text-white'>¿</p>
                <p className='font-bold text-[70px] text-c1'>Quiénes</p>
                <p className='font-bold text-[70px] text-white'> somos?</p>
              </div>
              <p 
                className='font-sans font-thin text-[25px] text-white text-justify'
              >
                Una empresa moderna de logística de importaciones,
                que brinda soluciones a cualquier tipo de 
                necesidad del cliente.
              </p>
            </div>
            <div className='w-[50%]' data-aos="fade-left" data-aos-anchor-placement="top-bottom">
              <img src={portada2} alt="portada2" className='rounded-full'/> 
            </div>
          </div>

          {/* Parte 3 */}
          <div className='w-[100%] py-[10%] flex flex-col items-center justify-center'>
            <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='flex flex-row items-center justify-center'>
              <p className='font-bold text-[70px] text-c1'>TÚ </p>
              <p className='font-bold text-[70px] text-white'>lo pides, </p>
              <p className='font-bold text-[70px] text-c1'>NOSOTROS </p>
              <p className='font-bold text-[70px] text-white'>hacemos todo por ti!</p>
            </div>
            <div className='flex flex-col items-start py-[2%]'>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[35px] text-c1'>• Búsqueda de productos</p>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[35px] text-white'>• Búsqueda de proveedores</p>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[35px] text-c1'>• Transporte aéreo, marítimo y terrestre</p>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[35px] text-white'>• Aduana e impuestos</p>
              <br  className='py-[10px]'/>
            </div>
            <p data-aos="flip-up" data-aos-anchor-placement="top-bottom" className='font-bold text-[80px] text-c1 pl-[100px]'>y mucho más...</p>
          </div>

          {/* Parte 4 */}
          <div className='w-[100%] py-[10%] flex items-center justify-center'>
            <div className='w-[50%]' data-aos="fade-right" data-aos-anchor-placement="top-bottom">
              <img src={portada} alt="portada" className='rounded-full'/> 
            </div>
            <div className='w-[50%] px-[5%]' data-aos="fade-left" data-aos-anchor-placement="top-bottom">
              <div className='flex flex-row'>
                <p className='font-bold text-[70px] text-white'>Nuestra</p>
                <p className='font-bold text-[70px] text-c1'> misión:</p>
              </div>
              
              <p 
                className='font-sans font-thin text-[25px] text-white text-justify'
              >
                Brindar soluciones rápidas y eficientes para el cliente
                haciendo de la logística una comodidad, generando
                confianza y fiabilidad en el proceso de importación
                y dejando de lado las complicaciones. 
              </p>
            </div>
          </div>

          {/* Parte 5 */}
          <div className='w-[100%] py-[10%] flex flex-col items-center justify-center'>
            <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='flex flex-row items-center justify-center'>
              <p className='font-bold text-[70px] text-white'>¿</p>
              <p className='font-bold text-[70px] text-c1'>Cómo</p>
              <p className='font-bold text-[70px] text-white'> funciona?</p>
            </div>
            {/* Boxes */}
            <div className='flex flex-row items-center justify-center mt-8'>
              {/* Cart 1 */}
              <div 
                className='flex flex-col items-center justify-center max-w-[300px] bg-c1 text-white py-2 px-4 border-2 border-white rounded-2xl'
                data-aos="flip-down" data-aos-anchor-placement="top-bottom"
              >
                <p className='font-bold text-[25px] mt-3'>1. Pide una cotización</p>
                <p className='mt-3 font-sans font-thin text-justify'>
                  Pide una cotización sobre
                  el costo del servicio, puede
                  incluir o no la búsqueda de 
                  productos o proveedores, en caso
                  de no tenerlos, nosotros nos
                  encargamos de buscarlos por ti.
                  Puedes pedir cotizaciones de varios 
                  proveedores para elegir la que más 
                  se ajuste a tus necesidades!
                </p>
                <BiBookContent className='w-[60px] h-[60px] my-3 text-c2'/>
              </div>
              {/* Cart 2 */}
              <div 
                className='flex flex-col items-center justify-center ml-5 max-w-[300px] bg-c1 text-white py-2 px-4 border-2 border-white rounded-2xl'
                data-aos="flip-down" data-aos-anchor-placement="top-bottom"
              >
                <p className='font-bold text-[25px] mt-3'>2. Paga un adelanto</p>
                <p className='mt-3 font-sans font-thin text-justify'>
                  Paga un adelanto según el valor
                  de tu mercancía y la cotización 
                  otorgada que hayas escogido. Los
                  adelantos se pagan ante la firma 
                  de un contrato por ambas partes,
                  de forma que si existe algún 
                  inconveniente, exista el debido 
                  respaldo legal, para brindarte 
                  la confianza necesaria! No dudes en
                  confiar en nosotros!
                </p>
                <GiTakeMyMoney className='w-[60px] h-[60px] my-3 text-c2'/>
              </div>
              {/* Cart 3 */}
              <div 
                className='flex flex-col items-center justify-center ml-5 max-w-[300px] bg-c1 text-white py-2 px-4 border-2 border-white rounded-2xl'
                data-aos="flip-down" data-aos-anchor-placement="top-bottom"
              >
                <p className='font-bold text-[25px] mt-3'>3. Déjalo a nosotros</p>
                <p className='mt-3 font-sans font-thin text-justify'>
                  Deja que nos encarguemos de lo demás!
                  Después de los anteriores pasos,
                  solo debes esperar los tiempos
                  acordados en el contrato mientras
                  nosotros nos ocupamos de traer tu 
                  mercancía hasta Bolivia. No dudes en
                  hacer el debido seguimiento de la 
                  documentación e información sobre 
                  tu carga.
                </p>
                <TbPackageImport className='w-[60px] h-[60px] my-3 text-c2'/>
              </div>

            </div>
          </div>
          
        </div>
      </div>
      {/* Versión MÓVIL */}
      <div className='flex w-full md:hidden'>


        <div className='w-full px-[3%]'>
          {/* Parte 1 */}
          <div data-aos="flip-down" data-aos-anchor-placement="top-center" className='min-h-screen pb-[70px] flex flex-col items-center justify-center'>
        
            <div className='px-4'>
              <img src={logo} alt="logo"/> 
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='font-bold text-[50px] text-c1'>
                EZImports
              </p>
              <p className='font-bold text-[50px] text-white'>
                Bolivia
              </p>
              <p className='font-sans text-[18px] font-thin text-white tex'>
                Importaciones rápidas, fáciles
                y eficientes...
              </p>
            </div>
          </div>
          {/* Parte 2 */}
          <div className='w-full py-5 px-5 flex flex-col items-center justify-center' data-aos="fade-right" data-aos-anchor-placement="top-bottom">
            <div>
              <div className='flex flex-row items-center justify-center'>
                <p className='font-bold text-[40px] text-white'>¿</p>
                <p className='font-bold text-[40px] text-c1'>Quiénes</p>
                <p className='font-bold text-[40px] text-white'> somos?</p>
              </div>
              <p 
                className='font-sans font-thin text-[18px] text-white text-justify'
              >
                Una empresa moderna de logística de importaciones,
                que brinda soluciones a cualquier tipo de 
                necesidad del cliente.
              </p>
            </div>
            <div className='mt-4 px-4'>
              <img src={portada2} alt="portada2" className='rounded-lg'/> 
            </div>
          </div>

          {/* Parte 3  */}
          <div className='w-full py-5 flex flex-col items-center justify-center mt-[70px]'>
            <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center justify-center'>
              <div className='flex flex-row items-center justify-center'>
                <p className='font-bold text-[40px] text-c1'>TÚ </p>
                <p className='font-bold text-[40px] text-white'>lo pides, </p>
              </div>
              <div className='flex flex-row items-center justify-center'>
                <p className='font-bold text-[40px] text-c1'>NOSOTROS </p>
                <p className='font-bold text-[40px] text-white'>hacemos</p>
              </div>
              <p className='font-bold text-[40px] text-white'>todo por ti!</p>
            </div>
            <div className='flex flex-col items-start py-[2%] mt-5'>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[25px] text-white'>• Búsqueda de productos</p>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[25px] text-white'>• Búsqueda de proveedores</p>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[25px] text-white'>• Transporte de todo tipo</p>
              <p data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='font-bold text-[25px] text-white'>• Aduana e impuestos</p>
            </div>
            <p data-aos="flip-up" data-aos-anchor-placement="top-bottom" className='font-bold text-[40px] text-white pl-[40px] mt-8'>y mucho más...</p>
          </div>

          {/* Parte 4 */}
          <div className='w-full py-5 px-5 flex flex-col items-center justify-center mt-[70px]' data-aos="fade-right" data-aos-anchor-placement="top-bottom">
            <div className='px-4'>
              <img src={portada} alt="portada" className='rounded-lg'/> 
            </div>
            <div>
              <div className='flex flex-row items-center justify-center mt-4'>
                <p className='font-bold text-[40px] text-white'>Nuestra misión:</p>
              </div>
              <p 
                className='font-sans font-thin text-[18px] text-white text-justify'
              >
                Brindar soluciones rápidas y eficientes para el cliente
                haciendo de la logística una comodidad, generando
                confianza y fiabilidad en el proceso de importación
                y dejando de lado las complicaciones. 
              </p>
            </div>
          </div>

          {/* Parte 5 */}
          <div className='w-full py-5 px-5 flex flex-col items-center justify-center mt-[70px]'>
            <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='flex flex-row items-center justify-center'>
              <p className='font-bold text-[40px] text-white'>¿Cómo funciona?</p>
            </div>
            
            <div className='flex flex-col w-full items-center justify-center my-8'>
            
              <div 
                className='flex flex-col items-center justify-center w-full bg-c1 text-white py-2 px-4 border-2 border-white rounded-2xl'
                data-aos="flip-down" data-aos-anchor-placement="top-bottom"
              >
                <p className='font-bold text-[25px] mt-3'>1. Pide una cotización</p>
                <p className='mt-3 font-sans font-thin text-justify'>
                  Pide una cotización sobre
                  el costo del servicio, puede
                  incluir o no la búsqueda de 
                  productos o proveedores, en caso
                  de no tenerlos, nosotros nos
                  encargamos de buscarlos por ti.
                  Puedes pedir cotizaciones de varios 
                  proveedores para elegir la que más 
                  se ajuste a tus necesidades!
                </p>
                <BiBookContent className='w-[60px] h-[60px] my-3 text-c2'/>
              </div>
              
              <div 
                className='flex flex-col items-center justify-center w-full mt-8 bg-c1 text-white py-2 px-4 border-2 border-white rounded-2xl'
                data-aos="flip-down" data-aos-anchor-placement="top-bottom"
              >
                <p className='font-bold text-[25px] mt-3'>2. Paga un adelanto</p>
                <p className='mt-3 font-sans font-thin text-justify'>
                  Paga un adelanto según el valor
                  de tu mercancía y la cotización 
                  otorgada que hayas escogido. Los
                  adelantos se pagan ante la firma 
                  de un contrato por ambas partes,
                  de forma que si existe algún 
                  inconveniente, exista el debido 
                  respaldo legal, para brindarte 
                  la confianza necesaria! No dudes en
                  confiar en nosotros!
                </p>
                <GiTakeMyMoney className='w-[60px] h-[60px] my-3 text-c2'/>
              </div>
              
              <div 
                className='flex flex-col items-center justify-center w-full mt-8 bg-c1 text-white py-2 px-4 border-2 border-white rounded-2xl'
                data-aos="flip-down" data-aos-anchor-placement="top-bottom"
              >
                <p className='font-bold text-[25px] mt-3'>3. Déjalo a nosotros</p>
                <p className='mt-3 font-sans font-thin text-justify'>
                  Deja que nos encarguemos de lo demás!
                  Después de los anteriores pasos,
                  solo debes esperar los tiempos
                  acordados en el contrato mientras
                  nosotros nos ocupamos de traer tu 
                  mercancía hasta Bolivia. No dudes en
                  hacer el debido seguimiento de la 
                  documentación e información sobre 
                  tu carga.
                </p>
                <TbPackageImport className='w-[60px] h-[60px] my-3 text-c2'/>
              </div>

            </div>
          </div>



        </div>



      </div>
        
    </>
  )
}
