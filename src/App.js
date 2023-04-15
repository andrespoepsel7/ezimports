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

// Router
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/resetear_clave' element={<ResetPassword/>}/>
        <Route path='/confirmar_resetear_clave/:userInfo' element={<ConfirmResetPassword/>}/>
        <Route path='/nuevo_usuario' element={<Authenticator role='admin'><Signup/></Authenticator>}/>
        <Route path='/confirmar_email/:userInfo' element={<Authenticator role='admin'><ConfirmEmail/></Authenticator>}/>
        <Route path='/main' element={<Authenticator role='user'><Main/></Authenticator>}/>
        <Route path='/pdf_viewer' element={<Authenticator role='user'><PDFViewer/></Authenticator>}/>
      </Routes>
    </DataProvider>
  );
}

export default App;
