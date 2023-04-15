import React, {useState, useContext} from 'react'
// Context
import { DataContext } from '../../AppContext/DataContext'
// Assets
import logo from '../../Assets/Element 30 NO BG.png'
// Loader 
import Loader from './Loader'
// Iconos
import {FaSignInAlt} from 'react-icons/fa'
// Navegación
import { useParams } from 'react-router-dom'

export default function ConfirmEmail() {

    // Información de la página anterior
    const {userInfo} = useParams()

    // Propiedades de context
    const {loading, setLoading, handleConfirm, resendCode} = useContext(DataContext)
    setLoading(false)

    const [codigo, setCodigo] = useState('')


    // Funciones

    // Función para confirmar el mail con el código proporcionado
    const confirmEmail= async(e) => {
        e.preventDefault()
        let data = {
            email:userInfo,
            code:codigo
        }
        handleConfirm(data)
        
    }

  return (
    <div className='flex w-full min-h-screen items-center justify-center bg-gradient-to-r from-violet-950 to-amber-400'>
        {/* Versión WEB */}    
        <div className='hidden sm:flex flex-col'>
            {loading ?
                <Loader/>
                :
                <div className='relative flex flex-col items-center justify-center bg-white py-[30px] px-[60px] min-w-[450px] min-h-[350px] rounded-[35px] border-4 border-amber-400'>
                    <img src={logo} alt="logo" className='w-[110px] mb-3' />
                    <p className='font-bold text-[25px] text-amber-400'>Verificar E-mail</p>
                    
                    <form className='flex flex-col w-full items-center' onSubmit={confirmEmail}>
                        <div className='flex flex-col w-full items-start'>
                            <p className='w-full mt-5 py-1 px-3 text-violet-950 outline-none' >
                                Porfavor ingrese el código enviado a<br />
                                su correo electrónico.
                            </p>
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="password" 
                                placeholder='Código' 
                                onChange={(e)=> setCodigo(e.target.value)}
                            />
                            <p 
                                className='text-amber-400 mt-5 underline hover:text-amber-300 hover:cursor-pointer'
                                onClick={resendCode}
                            >
                                Reenviar código
                            </p>
                        </div>
                            
                        <button className='flex flex-row items-center mt-6 py-1 px-5 bg-violet-950 text-white hover:bg-violet-900 rounded-lg border-2 border-amber-400'>
                            <p className='font-bold mr-2'>Confirmar</p>
                            <FaSignInAlt/>
                        </button>
                    </form>
                </div>
            }
            
        </div>
        {/* Versión MÓVIL */}
        <div className='flex flex-col mx-0 sm:hidden'>
            Versión disponible solo en escritorio.
        </div>
        
    </div>
  )
}
