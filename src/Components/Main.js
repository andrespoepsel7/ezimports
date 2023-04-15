import React, {useState, useEffect, useContext} from 'react'
// Context
import { DataContext } from '../AppContext/DataContext'
// API
import { API, graphqlOperation } from 'aws-amplify'
// Navigation
import { useNavigate } from 'react-router-dom'
// Logo
import logo from '../Assets/Element 30 NO BG.png'

export default function Main() {

    // navegación
    const navigate = useNavigate()

    // Context
    const {user, signOut} = useContext(DataContext)

    // states

    // Función para subir el archivo
    const pdfViewer = () => {
        navigate('/pdf_viewer')
    }

    // Función para navegar a crear usuario
    const crearUsuario = () => {
        navigate('/nuevo_usuario')
    }

    // Useeffect para cargar los tasks al refrescar la página
    useEffect(() => {
    //   async function loadTask(){
    //     const result = await API.graphql(graphqlOperation(listTasks))
    //     console.log(result)
    //     setTareas(result.data.listTasks.items)
    //   }
    
    //   loadTask()
    }, [])
    
  return (
    <div className='flex w-full min-h-screen bg-gradient-to-r from-violet-950 to-amber-400'>
        {/* Versión WEB */}    
        <div className='hidden sm:flex flex-col'>
            {/* Navbar */}
            <div className='fixed flex flex-row top-0 left-0 w-full bg-white py-2 px-3 shadow-md shadow-violet-950 justify-between'>
                <div>
                    <img src={logo} alt="logo" className='w-[80px]' />
                </div>
                <div>
                    Hola
                </div>
                
                
            </div>
            
            <div className='mt-[5%]'>
            
            </div>
        </div>
        {/* Versión MÓVIL */}
        <div className='flex flex-col mx-0 sm:hidden'>
            Versión disponible solo en escritorio.
        </div>
        
    </div>
  )
}
