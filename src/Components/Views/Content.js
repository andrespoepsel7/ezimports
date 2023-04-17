import React from 'react'
// Imagenes
import portada from '../../Assets/Portada.jpeg'
import portada2 from '../../Assets/Portada 2.jpeg'


export default function Content() {
  return (
    <>
      {/* Versión WEB */}    
      <div className='hidden md:flex w-[100%] justify-center'>
          <div className='flex flex-col pt-[20px]'>
            {/* Párrafo 1 */}
            <div className='flex flex-row w-full '>
              <div className='flex py-2 pr-4 w-[60%] items-center justify-center'>
                <img src={portada2} alt="portada2" className='rounded-[25px] border-2 border-amber-400' /> 
              </div>
              <div className='py-4 pl-8 w-[40%] text-[18px] items-center'>
                <p 
                  className='font-bold text-[25px] text-amber-400'
                >
                  ¿Quienes somos?
                </p>
                <p 
                  className='text-violet-950 font-serif text-justify'
                >
                  Esta es una empresa que brinda principalmente
                  soluciones de logística en importaciones, ayudando a
                  personas o empresas a poder realizar importaciones ya 
                  sea para uso propio o para comercio. La logística consiste
                  en todo el proceso, desde conseguir un proveedor, elegir
                  el método de envío, y encargarse de todos los procesos
                  aduaneros y trámites que se realizan al ingresar
                  mercadería al país. Adicionalmente la empresa
                  se decica a realizar importaciones propias destinadas
                  al comercio mayorista. Se traen productos de alta
                  calidad e innovadores que crean competencias específicas
                  en el mercado Boliviano. 
                </p>
              </div>
            </div>
            
            {/* Párrafo 2 */}
            <div className='flex flex-row w-full mt-4'>
              <div className='py-4 pr-8 w-[40%] text-[18px] items-center'>
                <p 
                  className='font-bold text-[25px] text-amber-400'
                >
                  Nuestra misión:
                </p>
                <p 
                  className='text-violet-950 font-serif text-justify'
                >
                  Brindar soluciones rápidas y eficientes para el cliente
                  haciendo de la logística una comodidad, generando
                  confianza y fiabilidad en el proceso de importación
                  y dejando de lado las complicaciones. Con nosotros
                  importar nunca fue tan fácil divertido y rápido! Adicionalmente
                  también tenemos como propósito traer productos de alta calidad
                  y suficientemente innovadores, que expandan el mercado boliviano
                  haciéndolos accesibles para mayor cantidad de gente, pudiendo
                  así llegar a mercados y segmentos aún mayores, quitando la idea 
                  de que la tecnología de alta calidad es cara.
                </p>
              </div>
              <div className='flex py-2 pl-4 w-[60%] items-center justify-center'>
                <img src={portada} alt="portada" className='rounded-[25px] border-2 border-amber-400'/> 
              </div>
            </div>

            {/* Párrafo 3 */}
            <div className='flex flex-row w-full mt-4'>

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
