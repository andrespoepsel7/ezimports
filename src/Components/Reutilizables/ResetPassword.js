import React, {useState} from 'react'
// Loader
import Loader from './Loader'
// Logo
import logo from '../../Assets/Element 30 NO BG.png'
// Icons
import {FaSignInAlt} from 'react-icons/fa'
// Navigation
import { useNavigate } from 'react-router-dom'
// Auth
import { Auth } from 'aws-amplify'
// swal
import Swal from 'sweetalert2'

export default function ResetPassword() {

    // Navegación
    const navigate = useNavigate()

    // states
    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState("")

    // Funciones
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(userName){
            setLoading(true)
            Auth.forgotPassword(userName).then((data)=>{
                console.log(data)
                setLoading(false)
                navigate(`/confirmar_resetear_clave/${userName}`)
            }).catch((error) => {
                console.log(error)
                Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                }).fire({
                    icon:'error',
                    title:'Error!',
                    text:error
                })
                setLoading(false)
            })   
        }
        
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

                    <p className='font-bold text-[25px] text-amber-400'>Cambio de contraseña</p>
                        
                    <form className='flex flex-col w-full items-center' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full items-start'>
                            <p className='mt-7 text-violet-950'>Ingresar el correo electónico - usuario...</p>
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="email" 
                                placeholder='Email' 
                                onChange={(e)=> setUserName(e.target.value)}
                            />
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
