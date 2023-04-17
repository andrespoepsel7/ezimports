import React, {useContext, useState} from 'react'
// Context
import { DataContext } from '../../AppContext/DataContext'
//Logo
import logo from '../../Assets/Element 30 NO BG.png'
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
    <>
        <div className='fixed flex flex-row top-0 left-0 w-full h-[100px] bg-slate-100 py-2 px-3 shadow-md shadow-violet-950 items-center justify-between'>
            <div className='ml-[10%]'>
                <div className='flex flex-row items-center'>
                    <img src={logo} alt="logo" className='w-[85px] mr-2' onClick={()=> navigate('/main')}/>
                    <div className='flex flex-row divide-x divide-amber-400 text-[18px]'>
                        <div className='text-center'>
                            <p 
                                className='font-bold font-mono py-1 pr-3 cursor-pointer text-amber-400 hover:text-amber-300'
                                onClick={()=>navigate('/main')}
                            >
                                Inicio
                            </p>
                        </div>
                        <div className='text-center'>
                            <p 
                                className='font-bold font-mono py-1 px-3 cursor-pointer text-amber-400 hover:text-amber-300'
                                onClick={()=>navigate('/panel_general')}
                            >
                                Panel General
                            </p>
                        </div>
                        <div className='text-center'>
                            <p 
                                className='font-bold font-mono py-1 px-3 cursor-pointer text-amber-400 hover:text-amber-300'
                                onClick={()=>navigate('/info')}
                            >
                                Información
                            </p>
                        </div>
                        
                        {
                            user.attributes['custom:roles'] === 'admin' &&
                            <div className='text-center'>
                                <p 
                                    className='font-bold font-mono py-1 px-3 cursor-pointer text-amber-400 hover:text-amber-300'
                                    onClick={()=>navigate('/panel_administrador')}
                                >
                                    Panel administrador
                                </p>
                            </div>
                            
                        }
                        
                    </div>
                    
                </div>
                
            </div>
            
            <div 
                className='flex flex-row mr-[10%] justify-center items-center cursor-pointer'
                onClick={()=>setModal(!modal)}
            >
                <p className='font-bold mr-2 text-amber-400 hover:text-amber-300'>{user.attributes.email.split('@')[0]}</p>
                <BiUserCircle className='w-[40px] h-[40px] fill-violet-950 hover:fill-violet-900'/>
            </div>  
            
        </div>
        {modal &&
            <div className='fixed top-[100px] right-[10%] bg-slate-100 border-l-2 border-b-2 border-violet-950'>
                <div className='flex flex-col justify-start divide-y-[1px] divide-amber-400'>
                    <div className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer text-amber-400 hover:text-amber-300 hover:bg-white'>
                        <p className='mr-2'>Cuenta</p>
                        <MdOutlineManageAccounts className='w-[18px] h-[18px]'/>
                    </div>
                    <div 
                        className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer text-amber-400 hover:text-amber-300 hover:bg-white'
                        onClick={()=> signOut()}
                    >
                        <p className='mr-2'>Cerrar sesión</p>
                        <FaSignOutAlt className='w-[18px] h-[18px]'/>
                    </div>
                </div>
            </div>
        } 
    </>
        
  )
}
