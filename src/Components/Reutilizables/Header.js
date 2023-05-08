import React, {useContext, useState, useEffect, useRef} from 'react'
// Context
import { DataContext } from '../../AppContext/DataContext'
//Logo
import logo from '../../Assets/Element 31 NO BG.png'
// Icons
import {BiUserCircle} from 'react-icons/bi'
import {FaSignOutAlt} from 'react-icons/fa'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
// Navigation
import { useNavigate } from 'react-router-dom'

export default function Header() {

    // Navigation 
    const navigate = useNavigate()

    // Hookk de Referencia para el menu Web
    const menuRef = useRef(null)
    // Hook de referencia para el menu móvil
    const menuRefMovil = useRef()

    // Usuario
    const {user, signOut} = useContext(DataContext)

    // states
    const [modal, setModal] = useState(false)
    const [modalMovil, setModalMovil] = useState(false)

    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current?.contains(e.target)){
            setModal(false)
        }
        if(!menuRefMovil.current?.contains(e.target)){
            setModalMovil(false)
        }
      }

      document.addEventListener("mousedown", handler)
    
      return () => {
        document.removeEventListener("mousedown", handler)
      }
    })
    
    

    return(
        <>
        
            {/* Versión WEB */}    
            <div className='hidden md:flex w-[100%]'>
                <div className='fixed flex flex-row top-0 left-0 w-full h-[100px] py-2 px-3 bg-c1 shadow-sm shadow-slate-200 items-center justify-between'>
                    <div className='ml-[10%]'>
                        <div className='flex flex-row items-center'>
                            <img src={logo} alt="logo" className='w-[85px] mr-2' onClick={()=> navigate('/')}/>
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
                        <div className='mr-[10%] cursor-pointer' ref={menuRef}>
                            <div 
                                className='flex flex-row items-center justify-center text-white hover:text-c2'
                                onClick={()=>setModal(!modal)}
                            >   

                                <p className='font-bold font-serif text-lg mr-2 transition-all duration-100'>{user.attributes.name}</p>
                                <BiUserCircle className='w-[40px] h-[40px] transition-all duration-100'/>
                            </div>  
                            {modal &&
                                <div className='fixed top-[80px] right-[5%] bg-white text-[18px] rounded-md transition-transform'>
                                    <div className='flex flex-col justify-start'>
                                        <div 
                                            className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer text-c2 hover:bg-slate-200 rounded-md'
                                            onClick={()=>{
                                                setModal(false)

                                            }}
                                        >
                                            <p className='mr-2'>Cuenta</p>
                                            <MdOutlineManageAccounts className='w-[18px] h-[18px]'/>
                                        </div>
                                        <div 
                                            className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer text-c2 hover:bg-slate-200 rounded-md'
                                            onClick={()=>{
                                                setModal(false)
                                                signOut()
                                            }}
                                        >
                                            <p className='mr-2'>Cerrar sesión</p>
                                            <FaSignOutAlt className='w-[18px] h-[18px]'/>
                                        </div>
                                    </div>
                                </div>
                            } 
                        </div>
                            
                        :
                        <div className='flex flex-row mr-[10%] justify-center items-center'>   
                            <p onClick={()=>navigate('/signup')} className='text-[25px] text-white hover:text-c2 underline cursor-pointer mr-3'>Registrarse</p>
                            <button onClick={()=>navigate('/login')} className='pt-1 px-2 text-[25px] bg-c2 hover:bg-amber-300 text-white mr-2 rounded-lg border-2 border-white'>
                                Iniciar Sesión
                            </button>
                        </div>  

                    }
                    
                    
                    
                </div>
                
            </div>
            {/* Versión MÓVIL */}
            <div className='flex w-full md:hidden'>
                <div className='fixed flex flex-row top-0 left-0 w-full h-[70px] py-2 px-3 bg-c1 shadow-sm shadow-slate-200 items-center justify-between'>
                    <div className='ml-[1%] flex flex-row items-center justify-center'>
                        <img src={logo} alt="logo" className='w-[50px] mr-1' onClick={()=> navigate('/')}/>
                        <p className='text-white font-serif text-[20px]'>EZImports</p>
                    </div>
                    <div className='mr-[1%] flex items-center justify-center' ref={menuRefMovil}>
                        <div className='flex flex-row items-center justify-center'>
                            <p className='text-white text-[25px] mt-1 hover:text-c2' onClick={()=>setModalMovil(!modalMovil)}>Menú</p>
                            {modalMovil ?
                            <>
                                <AiOutlineMenuFold className='w-[30px] h-[30px] fill-white hover:fill-c2' onClick={()=>setModalMovil(false)}/>
                                <div className='fixed top-[70px] right-0 w-[60%] min-h-screen flex justify-start bg-c1 text-white border-t-2 border-white shadow-md shadow-c1' >
                                    {user ?
                                    <div className='w-full flex flex-col items-start justify-start transition-all'>
                                        {/* Usuario */}
                                        <div className='flex mt-2 w-full items-center justify-center text-center'>
                                            <p className='font-bold font-serif text-[18px] mr-2'>{user.attributes.name}</p>
                                            <BiUserCircle className='w-[25px] h-[25px] transition-all duration-100'/>
                                        </div>
                                        {/* Menú si es que hay usuario */}
                                        <div className='w-full flex flex-col items-start justify-start ml-5 mt-3'>

                                            <div 
                                                className='flex flex-row w-full items-start justify-start my-1 hover:text-c2'
                                                onClick={()=>{
                                                    setModalMovil(false)
                                                    navigate('/')
                                                }}
                                            >
                                                <button className='text-[20px]'>Inicio</button>
                                            </div>
                                            <div 
                                                className='flex flex-row w-full items-start justify-start my-1 hover:text-c2'
                                                onClick={()=>{
                                                    setModalMovil(false)
                                                    navigate('/panel_general',{state:{prevUrl:'/panel_general'}})
                                                }}
                                            >
                                                <button className='text-[20px]'>Panel general</button>
                                            </div>

                                            <div 
                                                className='flex flex-row w-full items-start justify-start my-1 hover:text-c2'
                                                onClick={()=>{
                                                    setModalMovil(false)
                                                    navigate('/info',{state:{prevUrl:'/info'}})
                                                }}
                                            >
                                                <button className='text-[20px]'>Información</button>
                                            </div>

                                            <div 
                                                className='flex flex-row w-full items-start justify-start my-1 hover:text-c2'
                                                onClick={()=>{
                                                    setModalMovil(false)
                                                }}
                                            >
                                                <button className='text-[20px]'>Cuenta</button>
                                            </div>
                                            
                                            <div 
                                                className='flex flex-row w-full items-start justify-start my-1 hover:text-c2'
                                                onClick={()=>{
                                                    setModalMovil(false)
                                                    signOut()
                                                }}
                                            >
                                                <button className='text-[20px]'>Cerrar sesión</button>
                                            </div>
                                            
                                        </div>
                                        <div className='flex w-full items-center justify-center mt-auto mb-[100px]'>
                                            <img src={logo} alt="logo2" className='w-[100px]' />
                                        </div>

                                    </div>
                                    :
                                    <div className='w-full flex flex-col items-start justify-start transition-all'>
                                        {/* Menú si es que NO hay usuario */}
                                        <div className='w-full flex flex-col items-start justify-start ml-5 mt-3'>
                                            <div 
                                                className='flex flex-row w-full items-start justify-start my-1 hover:text-c2'
                                                onClick={()=>{
                                                    setModalMovil(false)
                                                    navigate('/login')
                                                }}
                                            >
                                                <button className='text-[20px]'>Iniciar sesión</button>
                                            </div>
                                            
                                            <div 
                                                className='flex flex-row w-full items-start justify-start my-1 hover:text-c2'
                                                onClick={()=>{
                                                    setModalMovil(false)
                                                    navigate('/signup')
                                                }}
                                            >
                                                <button className='text-[20px]'>Registrarse</button>
                                            </div>
                                            
                                        </div>
                                        <div className='flex w-full items-center justify-center mt-auto mb-[100px]'>
                                            <img src={logo} alt="logo2" className='w-[100px]' />
                                        </div>

                                    </div>
                                    }
                                </div>
                            </>
                            :
                            <>
                                <AiOutlineMenuUnfold className='w-[30px] h-[30px] fill-white hover:fill-c2' onClick={()=>setModalMovil(true)}/>
                            </>
                            }
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </>
    )
}
