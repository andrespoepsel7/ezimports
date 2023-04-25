import React, {createContext, useState} from 'react'
// Navegación
import { useNavigate, useLocation } from 'react-router-dom'
// AWS
import { Auth } from 'aws-amplify'
// Swal
import Swal from 'sweetalert2'


// Se crea el context API
export const DataContext = createContext()

export default function DataProvider({children}) {

    // Navegación
    const navigate = useNavigate()
    // Location
    const location = useLocation()
    if(location.state){
        console.log(location.state.prevUrl)
    }
    

    // Variables
    // Para saber dentro de toda la página si está cargando algún dato
    const [loading, setLoading] = useState(false)
    // Para saber si existe alguna sesión iniciada
    const [user, setUser] = useState()


    // Funciones

    // Función para crear una cuenta, recibe el objeto data como parámetro el cual contiene la información para registrarse
    const signUp = async(data) => {

        setLoading(true)

        try{
            const {user} = await Auth.signUp({
                username:data.email,
                password:data.password, 
                attributes:{
                    email:data.email,
                    name:data.nombre,
                    family_name:data.apellido,
                    'custom:roles': data.roles,
                },
                autoSignIn:{
                    enabled:false,
                }
            })
            console.log(user)
            navigate(`/confirmar_email/${data.email}`, {
                state:{
                    prevUrl:'',
                }
            })
            
            

        }catch(error){
            console.log('ERROR AL REGISTRARSE!:', error)
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
                title:'Error al crear usuario!',
                text:error
            })
        }
        // Deja de cargar
        setLoading(false)
        
    }

    // Función para confirmar el mail con el código proporcionado
    const handleConfirm = async(data) => {
        setLoading(true)
        try{
            const response = await Auth.confirmSignUp(data.email, data.code)
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
                icon:'success',
                title:'Exitoso!',
                text:"Usuario creado correctamente!"
            })
            console.log('Respuesta final:', response)

            navigate('/',{
                state:{
                    prevUrl:'',
                }
            })

        }catch(error){
            console.log(error)
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
                title:'Error al verificar email!',
                text:error
            })
        }
        setLoading(false)
    }

    // Función para reenviar el código
    const resendCode = async(email) => {
        setLoading(true)
        try{
            await Auth.resendSignUp(email)
            console.log('Código enviado correctamente')
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
                icon:'success',
                title:'Exitoso!',
                text:"Código enviado correctamente!"
            })
        }catch(error){
            console.log(error)
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
                title:'Error al enviar código!',
                text:error
            })
        }
        setLoading(false)
    }

    // Función para iniciar sesión
    const signIn = async(data) => {
        setLoading(true)
        try{
            const response = await Auth.signIn(data.email, data.password)
            console.log(response)
            let userInfo = await Auth.currentAuthenticatedUser()
            setUser(userInfo)
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
                icon:'success',
                title:'Exitoso!',
                text:"Inició sesión correctamente!"
            })
            if(location.state){
                console.log("NAVEGANDO A OTRA RUTA")
                navigate(`${location.state.prevUrl}`,)
            }else{
                console.log('NO HAY STATE')
                navigate('/')
            }
            

        }catch(error){
            console.log(error)
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
                title:'Error al iniciar sesión!',
                text:error
            })
        }
        setLoading(false)
    }

    // Función para cerrar sesión en todos los dispositivos 
    const signOut = async() => {
        setLoading(true)
        try{
            await Auth.signOut({global:true})
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
                icon:'success',
                title:'Exitoso!',
                text:"Cerró sesión correctamente!"
            })
            console.log('Cerro sesión')
        }catch(error){
            console.log(error)
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
                icon:'success',
                title:'Error al cerrar sesión!',
                text:error
            })
        }
        setUser()
        navigate('/',{
            state:{
                prevUrl:'',
            }
        })
        setLoading(false)
    }

  return (
    <DataContext.Provider value={{
        user,
        setUser,
        loading,
        setLoading,
        signUp,
        handleConfirm,
        resendCode,
        signIn,
        signOut,
    }}>
        {children}
    </DataContext.Provider>
  )
}
