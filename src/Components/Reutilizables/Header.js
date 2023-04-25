import React, {useContext, useState} from 'react'
// Context
import { DataContext } from '../../AppContext/DataContext'
//Logo
import logo from '../../Assets/Element 31 NO BG.png'
// Icons
import {BiUserCircle} from 'react-icons/bi'
import {FaSignOutAlt} from 'react-icons/fa'
import {MdOutlineManageAccounts} from 'react-icons/md'
// Navigation
import { useNavigate } from 'react-router-dom'

export default function Header() {

    // Navigation 
    const navigate = useNavigate()

    // Usuario
    const {user, signOut} = useContext(DataContext)

    // states
    const [modal, setModal] = useState(false)

  return (
    <div>
        {/* Versión WEB */}    
        <div className='hidden md:flex w-[100%]'>
            <div className='fixed flex flex-row top-0 left-0 w-full h-[100px] py-2 px-3 bg-c1 shadow-sm shadow-slate-200 items-center justify-between'>
                <div className='ml-[10%]'>
                    <div className='flex flex-row items-center'>
                        <img src={logo} alt="logo" className='w-[85px] mr-2' onClick={()=> navigate('/main')}/>
                        <div className='flex flex-row divide-x divide-white text-[18px]'>
                            <div className='text-center'>
                                <p 
                                    className='font-bold py-1 pr-3 cursor-pointer text-white hover:text-c2 text-[25px] transition-all duration-100'
                                    onClick={()=>navigate('/')}
                                >
                                    Inicio
                                </p>
                            </div>
                            <div className='text-center'>
                                <p 
                                    className='font-bold py-1 px-3 cursor-pointer text-white hover:text-c2 text-[25px] transition-all duration-100'
                                    onClick={()=>navigate('/panel_general',{state:{prevUrl:'/panel_general'}})}
                                >
                                    Panel General
                                </p>
                            </div>
                            <div className='text-center'>
                                <p 
                                    className='font-bold py-1 px-3 cursor-pointer text-white hover:text-c2 text-[25px] transition-all duration-100'
                                    onClick={()=>navigate('/info',{state:{prevUrl:'/info'}})}
                                >
                                    Información
                                </p>
                            </div>
                            
                            {
                                user && user.attributes['custom:roles'] === 'admin' &&
                                <div className='text-center'>
                                    <p 
                                        className='font-bold py-1 px-3 cursor-pointer text-white hover:text-c2 text-[25px] transition-all duration-100'
                                        onClick={()=>navigate('/panel_administrador')}
                                    >
                                        Panel administrador
                                    </p>
                                </div>
                                
                            }
                            
                        </div>
                        
                    </div>
                    
                </div>

                {
                    user ?
                    <div 
                        className='flex flex-row mr-[10%] justify-center items-center cursor-pointer text-white hover:text-c2'
                        onClick={()=>setModal(!modal)}
                    >   

                        <p className='font-bold font-serif text-lg mr-2 transition-all duration-100'>{user.attributes.name}</p>
                        <BiUserCircle className='w-[40px] h-[40px] transition-all duration-100'/>
                    </div>  
                    :
                    <div className='flex flex-row mr-[10%] justify-center items-center'>   
                        <p onClick={()=>navigate('/signup')} className='text-[25px] text-white hover:text-c2 underline cursor-pointer mr-3'>Registrarse</p>
                        <button onClick={()=>navigate('/login')} className='py-1 px-2 text-[25px] bg-c2 hover:bg-amber-300 text-white mr-2 rounded-lg border-2 border-white'>
                            Iniciar Sesión
                        </button>
                    </div>  

                }
                
                
                
            </div>
            {modal &&
                <div className='fixed top-[100px] right-[10%] bg-c1 border-l-2 border-b-2 border-r-2 border-c2 text-[18px]'>
                    <div className='flex flex-col justify-start divide-y-2 divide-c2'>
                        <div className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer text-white hover:text-c2 hover:bg-white transition-all duration-100'>
                            <p className='mr-2'>Cuenta</p>
                            <MdOutlineManageAccounts className='w-[18px] h-[18px]'/>
                        </div>
                        <div 
                            className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer text-white hover:text-c2 hover:bg-white transition-all duration-100'
                            onClick={()=>{
                                signOut()
                                setModal(false)
                            }}
                        >
                            <p className='mr-2'>Cerrar sesión</p>
                            <FaSignOutAlt className='w-[18px] h-[18px]'/>
                        </div>
                    </div>
                </div>
            } 
        </div>
        {/* Versión MÓVIL */}
        <div className='flex w-[100%] md:hidden'>
            Versión disponible solo en escritorio.
        </div>
    </div> 
  )
}
