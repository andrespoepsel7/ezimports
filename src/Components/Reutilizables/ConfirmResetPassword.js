import React, {useState} from 'react'
// Loader
import Loader from './Loader'
// Params 
import { useParams } from 'react-router-dom'
// Logo
import logo from '../../Assets/Element 30 NO BG.png'
// Icons
import {FaSignInAlt} from 'react-icons/fa'
// Navigation
import { useNavigate } from 'react-router-dom'
// auth
import { Auth } from 'aws-amplify'
// Swal
import Swal from 'sweetalert2'


export default function ConfirmResetPassword() {

    // navegación 
    const navigate = useNavigate()

    // States
    const [loading, setLoading] = useState(false)
    const [codigo, setCodigo] = useState("")
    const [clave, setClave] = useState("")
    const [nuevaClave, setNuevaClave] = useState("")

    // Información de la página anterior
    const {userInfo} = useParams()

    // Funciones
    // reenviar codigo
    const handleResendCode = async() => {
        setLoading(true)
        await Auth.forgotPassword(userInfo).then((data)=>{
            console.log(data)
            setLoading(false)
            navigate(`/confirmar_resetear_clave/${userInfo}`)
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

    // Comnfirmar registro de nueva contraseña
    const handleSubmit = (e) => {
        e.preventDefault()
        if(clave && nuevaClave && codigo){
            if(clave === nuevaClave){
                setLoading(true)
                Auth.forgotPasswordSubmit(userInfo, codigo, clave).then((data) =>{
                    console.log(data)
                }).catch((err) => {
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
                        text:err
                    })
                });
                setLoading(false)
                navigate('/')


            }else{
                // las claves no coinciden
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
                    text:'Las contraseñas no coinciden!'
                })
            }

        }else{
            // debe llenar todos los campos
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
                text:'Debe llenar todos los campos!'
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
                    <p className='font-bold text-[25px] text-amber-400'>Verificar E-mail</p>
                    
                    <form className='flex flex-col w-full items-center' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full items-start'>
                            <p className='w-full mt-5 py-1 px-3 text-violet-950 outline-none' >
                                Porfavor ingrese el código enviado a<br />
                                su correo electrónico, seguido de <br />
                                la nueva contraseña.
                            </p>
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="text" 
                                placeholder='Código' 
                                onChange={(e)=> setCodigo(e.target.value)}
                            />
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="password" 
                                placeholder='Contraseña nueva' 
                                onChange={(e)=> setClave(e.target.value)}
                            />
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="password" 
                                placeholder='Repetir contrseña' 
                                onChange={(e)=> setNuevaClave(e.target.value)}
                            />
                            <p 
                                className='text-amber-400 mt-5 underline hover:text-amber-300 hover:cursor-pointer'
                                onClick={handleResendCode}
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
