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
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const location = useLocation()

    // Propiedades de context
    const {loading, signIn} = useContext(DataContext)

    // States
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
    })

    // Funciones

    // Función para hacer el sign in del usuario
    const handleSignIn = (e) => {
        e.preventDefault()
        console.log(location)
        signIn(userInfo)
    }

    const handleForgotPassword = () => {
        navigate('/resetear_clave')
    }


 

  return (
    <div className='flex w-full min-h-screen items-center justify-center'>
        {/* Versión WEB */}    
        <div className='hidden sm:flex flex-col pb-[100px]'>
            {loading ?
                <Loader/>
                :
                <div className='relative flex flex-col items-center justify-center bg-white py-[30px] px-[60px] min-w-[450px] min-h-[350px] rounded-[35px] border-4 border-amber-400'>
                    <img src={logo} alt="logo" className='w-[110px] mb-3' />

                    <p className='font-bold text-[25px] text-amber-400'>Iniciar sesión</p>
                        
                    <form className='flex flex-col w-full items-center' onSubmit={handleSignIn}>
                        <div className='flex flex-col w-full items-start'>
                            <input
                                className='w-full font-sans mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="email" 
                                placeholder='Email' 
                                onChange={(e)=> setUserInfo({...userInfo, email:e.target.value})}
                            />
                            <input
                                className='w-full font-sans mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="password" 
                                placeholder='Contraseña' 
                                onChange={(e)=> setUserInfo({...userInfo, password:e.target.value})}
                            />
                            <p 
                                className='text-amber-400 mt-5 underline hover:text-amber-300 hover:cursor-pointer'
                                onClick={handleForgotPassword}
                            >
                                Olvidé la contraseña
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
