import { useEffect } from 'react';
// DataProvider
import DataProvider from './AppContext/DataContext';

// Ruta protegida
import Authenticator from './Components/Reutilizables/Authenticator';

// Páginas y componentes
import Main from './Components/Main';
import Signup from './Components/Reutilizables/Signup';
import Login from './Components/Reutilizables/Login';
import ConfirmEmail from './Components/Reutilizables/ConfirmEmail';
import PDFViewer from './Components/Reutilizables/PDFViewer';
import ResetPassword from './Components/Reutilizables/ResetPassword';
import ConfirmResetPassword from './Components/Reutilizables/ConfirmResetPassword';
import Content from './Components/Views/Content';
import PanelGeneral from './Components/Views/PanelGeneral'
import Informacion from './Components/Views/Informacion'
import PanelAdministrador from './Components/Views/PanelAdministrador'
import SignUpUser from './Components/Reutilizables/SignUpUser';

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Router
import { Route, Routes } from 'react-router-dom';


function App() {

  useEffect(() => {
    AOS.init({
      duration:1500,
      easing:'ease-in-out-back'
    })
  }, []);
  return (
    <DataProvider>
      <Routes>
        <Route element={<Main/>}>
          {/* Rutas que NO necesitan autenticación */}
          <Route path='/' element={<Content/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/resetear_clave' element={<ResetPassword/>}/>
          <Route path='/confirmar_resetear_clave/:userInfo' element={<ConfirmResetPassword/>}/>
          <Route path='/signup' element={<SignUpUser/>}/>
          <Route path='/confirmar_email/:userInfo' element={<ConfirmEmail/>}/>
          {/* Rutas de solamente usuario */}
          <Route path='/panel_general' element={<Authenticator role='user'><PanelGeneral/></Authenticator>}/>
          <Route path='/info' element={<Authenticator role='user'><Informacion/></Authenticator>}/>
          {/* Rutas de solamente administrador */}
          <Route path='/panel_administrador' element={<Authenticator role='admin'><PanelAdministrador/></Authenticator>}/>
          <Route path='/nuevo_usuario' element={<Authenticator role='admin'><Signup/></Authenticator>}/>
          <Route path='/pdf_viewer' element={<Authenticator role='user'><PDFViewer/></Authenticator>}/>
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
