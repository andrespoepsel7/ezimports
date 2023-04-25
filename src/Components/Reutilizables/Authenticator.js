import React, { useEffect, useState, useContext} from 'react'
// Datacontext
import { DataContext } from '../../AppContext/DataContext'
// Navegación directa
import { useLocation, useNavigate } from 'react-router-dom'
// Auth
import { Auth } from 'aws-amplify'
// Loader
import Loader from './Loader'

export default function Authenticator({children, role}) {

  //Navigate
  const navigate = useNavigate()

  // Context
  const {setUser} = useContext(DataContext)

  // Se verifica si hay un usuario en sesión
  const [cargando, setCargando] = useState(true)
  const [userInfo, setUserInfo] = useState()

  // Location
  const location = useLocation()
  

  // Useeffect para solo correr el código una vez en la ruta protegida
  useEffect(() => {
    async function obtenerPermiso(){
      try{
        let response = await Auth.currentAuthenticatedUser()
        setUserInfo(response)
        setUser(response)
      }catch(error){
        // Si hay cualquier error, la página vuelve al inicio
        console.log(error)
      }
      setCargando(false)
    }

    obtenerPermiso()
    console.log("PATHNAME:",location)

    // eslint-disable-next-line
  }, [])

  // Condicional para navegar a las páginas de permisos
  if(cargando){
    return <Loader/>
  }else{
    // Condicional para dar permiso a las páginas de usuarios y administradores
    if(userInfo){
      console.log(userInfo)
      if(role === 'admin'){
        console.log("Rol es admin")
        if(userInfo.attributes['custom:roles'] === 'admin'){
          console.log('Tiene permiso de admin')
          return children
        }else{
          console.log('No tiene permiso de admin')
          //return <Navigate to='/'/>
          navigate('/')
        }
      }else{
        console.log('Rol es usuario')
        return children
      }
    }else{
      console.log('No hay información asignada')
      //return <Navigate to='/login'/>
      setUser(null)
      navigate('/login',{state:{prevUrl:location.state.prevUrl}})
    }
    
  }
}
