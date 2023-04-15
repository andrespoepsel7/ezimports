import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Para la configuración de Router
import {BrowserRouter} from 'react-router-dom'

// Imports de amplify
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

// Inicializando la App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
