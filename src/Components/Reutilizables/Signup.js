import React, {useState, useContext} from 'react'
// Context
import { DataContext } from '../../AppContext/DataContext'
// Assets
import logo from '../../Assets/Element 30 NO BG.png'
// Loader 
import Loader from './Loader'
// Iconos
import {FaSignInAlt} from 'react-icons/fa'
// Swal
import Swal from 'sweetalert2'

export default function Signup() {

    // Propiedades de context
    const {loading, signUp} = useContext(DataContext)

    // Variables 
    const [roles, setRoles] = useState('user')
    
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
        confirmedPassword:'',
        roles:roles,
    })     

    // Función para cambiar el estado de roles
    const handleRadio = (e) => {
        setRoles(e.target.value)
        setUserInfo({...userInfo, roles:e.target.value})
    }
    
    // Función para manejar el signUp
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log(userInfo)
        if(userInfo.password !== userInfo.confirmedPassword){
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }).fire({
                icon:'error',
                title:'Error!',
                text:"Las contraseñas no coinciden!"
            })
        }else{
            signUp(userInfo)
        }
    }

  return (
    <div className='flex w-full h-[100%] items-center justify-center'>
        {/* Versión WEB */}    
        <div className='hidden sm:flex flex-col'>
            {loading ?
                <Loader/>
                :
                <div className='relative flex flex-col items-center justify-center bg-slate-100 py-[30px] px-[60px] min-w-[450px] min-h-[350px] rounded-[35px] border-4 border-amber-400'>
                    <img src={logo} alt="logo" className='w-[110px] mb-3' />

                    <p className='font-bold text-[25px] text-amber-400'>Registrar nuevo usuario</p>
                        
                    <form className='flex flex-col w-full items-center' onSubmit={handleSignUp}>
                        <div className='flex flex-col w-full items-start'>
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="email" 
                                placeholder='Email' 
                                onChange={(e)=> setUserInfo({...userInfo, email:e.target.value})}
                            />
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="password" 
                                placeholder='Contraseña' 
                                onChange={(e)=> setUserInfo({...userInfo, password:e.target.value})}
                            />
                            <input
                                className='w-full mt-5 py-1 px-3 border-2 border-violet-950 rounded-md outline-none' 
                                type="password" 
                                placeholder='Repetir contraseña' 
                                onChange={(e)=> setUserInfo({...userInfo, confirmedPassword:e.target.value})}
                            />
                            <label htmlFor="role" className='font-bold text-violet-950 text-[20px] mt-2'>Rol:</label>
                            <div className='flex flex-row mt-2'>
                                <input 
                                    type="radio" 
                                    name='role' 
                                    value='admin' 
                                    checked={roles === 'admin'}
                                    onChange={handleRadio} 
                                />
                                <p className='text-violet-950 ml-1'>Administrador</p>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <input 
                                    type="radio" 
                                    name='role' 
                                    value='user' 
                                    checked={roles === 'user'} 
                                    onChange={handleRadio} />
                                <p className='text-violet-950 ml-1'>Usuario</p>
                            </div>
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
